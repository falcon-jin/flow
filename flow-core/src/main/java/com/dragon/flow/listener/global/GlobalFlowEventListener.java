package com.dragon.flow.listener.global;

import cn.hutool.extra.spring.SpringUtil;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.dragon.flow.annotation.FlowMethodHander;
import com.dragon.flow.collector.FlowHanderCollector;
import com.dragon.flow.enm.flowable.runtime.CommentTypeEnum;
import com.dragon.flow.enm.flowable.runtime.ProcessStatusEnum;
import com.dragon.flow.model.flowable.CommentInfo;
import com.dragon.flow.model.flowable.ExtendHisprocinst;
import com.dragon.flow.model.flowable.ExtendProcinst;
import com.dragon.flow.service.flowable.ICommentInfoService;
import com.dragon.flow.service.flowable.IExtendHisprocinstService;
import com.dragon.flow.service.flowable.IExtendProcinstService;
import org.apache.commons.lang.StringUtils;
import org.flowable.common.engine.api.delegate.event.FlowableEngineEntityEvent;
import org.flowable.common.engine.api.delegate.event.FlowableEngineEventType;
import org.flowable.engine.HistoryService;
import org.flowable.engine.RuntimeService;
import org.flowable.engine.delegate.event.AbstractFlowableEngineEventListener;
import org.flowable.engine.delegate.event.FlowableCancelledEvent;
import org.flowable.engine.delegate.event.FlowableProcessStartedEvent;
import org.flowable.engine.history.HistoricProcessInstance;
import org.flowable.engine.impl.persistence.entity.ExecutionEntityImpl;
import org.flowable.engine.runtime.ProcessInstance;
import org.flowable.variable.api.event.FlowableVariableEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.Objects;

/**
 * @author : bruce.liu
 * @title: : GlobalTaskListener
 * @projectName : flow
 * @description: 任务创建全局监听
 * @date : 2021/05/11
 */
@Component
public class GlobalFlowEventListener extends AbstractFlowableEngineEventListener {

    protected Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private IExtendProcinstService extendProcinstService;
    @Autowired
    private IExtendHisprocinstService extendHisprocinstService;
    @Autowired
    private HistoryService historyService;
    @Autowired
    private ICommentInfoService commentInfoService;
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private FlowHanderCollector flowHanderCollector;

    @Override
    protected void variableCreated(FlowableVariableEvent event) {
        Object variableValue = event.getVariableValue();
        System.out.println(variableValue);
    }

    /**
     * 流程启动事件
     * @param event
     */
    @Override
    protected void processStarted(FlowableProcessStartedEvent event) {
        org.flowable.engine.delegate.event.impl.FlowableEntityEventImpl flowableEntityEvent = (org.flowable.engine.delegate.event.impl.FlowableEntityEventImpl) event;
        ExecutionEntityImpl processInstance = (ExecutionEntityImpl) flowableEntityEvent.getEntity();
        //创建子流程的扩展信息
        ExecutionEntityImpl parent = processInstance.getParent();
        if (StringUtils.isNotBlank(parent.getProcessInstanceId()) && StringUtils.isBlank(parent.getBusinessKey())){
            ProcessInstance superProcessInstance = runtimeService.createProcessInstanceQuery().processInstanceId(processInstance.getRootProcessInstanceId()).singleResult();
            //1、创建扩展信息
            ExtendProcinst extendProcinst = extendProcinstService.findExtendProcinstByProcessInstanceId(processInstance.getProcessInstanceId());
            if (extendProcinst == null){
                extendProcinst = new ExtendProcinst();
                extendProcinst.setProcessInstanceId(processInstance.getProcessInstanceId());
                extendProcinst.setModelKey(processInstance.getProcessDefinitionKey());
                extendProcinst.setProcessDefinitionId(processInstance.getProcessDefinitionId());
                extendProcinst.setId(IdWorker.get32UUID());
                extendProcinst.setCurrentUserCode(parent.getStartUserId());
                extendProcinst.setProcessStatus(ProcessStatusEnum.SPZ.toString());
                extendProcinstService.saveExtendProcinstAndHis(extendProcinst);
                //2、修改业务表单id到子流程中
                runtimeService.updateBusinessKey(processInstance.getProcessInstanceId(), superProcessInstance.getBusinessKey());
                runtimeService.setProcessInstanceName(processInstance.getProcessInstanceId(), superProcessInstance.getName());
            }
        }
        //获取流程定义key
        process(event,processInstance.getProcessDefinitionId(), FlowableEngineEventType.PROCESS_STARTED);
    }
    protected void  process(Object event, String processDefinitionId,FlowableEngineEventType engineEventType){
        Class aClass = flowHanderCollector.getClassName(processDefinitionId);
        Object bean = SpringUtil.getBean(aClass);
        Method[] declaredMethods = aClass.getDeclaredMethods();
        for (Method declaredMethod : declaredMethods) {
            FlowMethodHander annotation = declaredMethod.getAnnotation(FlowMethodHander.class);
            if(Objects.nonNull(annotation)){
                FlowableEngineEventType type = annotation.type();
                if(engineEventType.equals(type)){
                    try {
                        declaredMethod.invoke(bean, event);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }


    /**
     * 任务创建
     * @param event
     */
    @Override
    protected void taskCreated(FlowableEngineEntityEvent event) {
        String processDefinitionId = event.getProcessDefinitionId();
        //获取流程定义key
        process(event,processDefinitionId, FlowableEngineEventType.TASK_CREATED);

    }

    /**
     * 用户任务结束
     * @param event
     */
    @Override
    protected void taskCompleted(FlowableEngineEntityEvent event) {
        process(event,event.getProcessDefinitionId(), FlowableEngineEventType.TASK_COMPLETED);
    }

    /**
     * 流程结束事件
     * @param event
     */
    @Override
    protected void processCompleted(FlowableEngineEntityEvent event) {
        org.flowable.engine.delegate.event.impl.FlowableEntityEventImpl flowableEntityEvent = (org.flowable.engine.delegate.event.impl.FlowableEntityEventImpl) event;
        String processInstanceId = flowableEntityEvent.getProcessInstanceId();
        //1.更新历史的流程实例的扩展信息
        ExtendHisprocinst extendHisProcinst = extendHisprocinstService.findExtendHisprocinstByProcessInstanceId(processInstanceId);
        String processStatus;
        //流程办结事件
        if (extendHisProcinst != null && !ProcessStatusEnum.ZZ.toString().equals(extendHisProcinst.getProcessStatus())){
            processStatus = ProcessStatusEnum.BJ.toString();
            ExtendHisprocinst extendHisprocinst = new ExtendHisprocinst(processInstanceId, processStatus);
            extendHisprocinstService.updateAllStatusByProcessInstanceId(extendHisprocinst);
        }
        //流程结束信息如果是知会不用评论
        HistoricProcessInstance historicProcessInstance = historyService.createHistoricProcessInstanceQuery().processInstanceId(processInstanceId).singleResult();
        //流程一发起就结束信息添加
        if (historicProcessInstance == null){
            ExtendHisprocinst extendHisprocinst = new ExtendHisprocinst(processInstanceId, ProcessStatusEnum.BJ.toString());
            extendHisprocinstService.updateAllStatusByProcessInstanceId(extendHisprocinst);
        }
        //保存审批意见
        CommentInfo commentInfo = new CommentInfo();
        commentInfo.setProcessInstanceId(processInstanceId);
        commentInfo.setType(CommentTypeEnum.SPJS.name());
        commentInfo.setMessage(CommentTypeEnum.getEnumMsgByType(CommentTypeEnum.SPJS.toString()));
        commentInfo.setPersonalCode("system");
        commentInfoService.saveComment(commentInfo);
        //删除运行时的流程实例扩展信息
        extendProcinstService.deleteExtendProcinstByProcessInstanceId(processInstanceId);
        //发送mongodb的消息数据
        //发送消息
            /*if (!processStatus.equals(ProcessStatusEnum.ZZ.toString()) && dragonFlowProperties.isMessageEnabled()) {
                this.sendMessage(processInstanceId);
            }*/
        process(event,event.getProcessDefinitionId(), FlowableEngineEventType.PROCESS_COMPLETED);
    }
    /**
     * 流程取消事件
     * @param event
     */
    @Override
    protected void processCancelled(FlowableCancelledEvent event) {
        logger.info("{}流程取消了",event.getProcessInstanceId());
        process(event,event.getProcessDefinitionId(), FlowableEngineEventType.PROCESS_CANCELLED);
    }

}
