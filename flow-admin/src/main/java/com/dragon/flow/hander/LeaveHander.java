package com.dragon.flow.hander;

import com.dragon.flow.annotation.FlowHander;
import com.dragon.flow.annotation.FlowMethodHander;
import org.flowable.common.engine.api.delegate.event.FlowableEngineEventType;
import org.flowable.engine.delegate.event.impl.FlowableEntityEventImpl;
import org.flowable.engine.delegate.event.impl.FlowableProcessStartedEventImpl;

/**
 * @Author: 请假流程处理类
 * @Date: 2021/12/19 13:41
 * @Description:
 */
@FlowHander("leave:1:66580c30200e11ecbaee00e04d680167")
public class LeaveHander {
    @FlowMethodHander(type = FlowableEngineEventType.PROCESS_STARTED)
    public String handerStart(FlowableProcessStartedEventImpl event){
        Object entity = event.getEntity();
        System.out.println("流程启动自定义任务处理");
        return "";
    }
    @FlowMethodHander(type = FlowableEngineEventType.TASK_CREATED)
    public String handerTaskCreat(Object event){
        System.out.println("任务创建任务处理");
        return "";
    }
    @FlowMethodHander(type = FlowableEngineEventType.TASK_COMPLETED)
    public String handerTaskProcess(FlowableEntityEventImpl event){
        System.out.println("当前用户任务处理成功");
        return "";
    }
    @FlowMethodHander(type = FlowableEngineEventType.PROCESS_COMPLETED)
    public String handerProcessCompleted(Object event){
        System.out.println("流程结束自定义任务处理");
        return "";
    }
    @FlowMethodHander(type = FlowableEngineEventType.PROCESS_CANCELLED)
    public String handerProcessCancelled(Object event){
        System.out.println("流程取消自定义任务处理");
        return "";
    }
}
