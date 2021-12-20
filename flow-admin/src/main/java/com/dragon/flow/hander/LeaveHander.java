package com.dragon.flow.hander;

import com.dragon.flow.annotation.FlowHander;
import com.dragon.flow.annotation.FlowMethodHander;
import com.dragon.flow.constant.FlowConstant;
import org.flowable.common.engine.api.delegate.event.FlowableEngineEntityEvent;
import org.flowable.common.engine.api.delegate.event.FlowableEngineEventType;
import org.flowable.engine.RuntimeService;
import org.flowable.engine.delegate.event.impl.FlowableEntityEventImpl;
import org.flowable.engine.delegate.event.impl.FlowableProcessStartedEventImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: 请假流程处理类
 * @Date: 2021/12/19 13:41
 * @Description: leave:1:66580c30200e11ecbaee00e04d680167
 */
@FlowHander({"leave:2:2e5f0bae60c411ecb07494e70bb49f51","leave:1:66580c30200e11ecbaee00e04d680167"})
public class LeaveHander {
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private CacheManager cacheManager;

    @FlowMethodHander(type = FlowableEngineEventType.PROCESS_STARTED)
    public String handerStart(FlowableProcessStartedEventImpl event){
        Map variables = event.getVariables();
        List<String> userList = new ArrayList<>();
        userList.add("10004");
        variables.put("form_userList",userList);
        //动态设置变量
        runtimeService.setVariables(event.getExecutionId(),variables);
        System.out.println("流程启动自定义任务处理");
        return "";
    }
    @FlowMethodHander(type = FlowableEngineEventType.TASK_CREATED)
    public String handerTaskCreat(FlowableEngineEntityEvent event){

        System.out.println("任务创建任务处理");
        return "";
    }
    @FlowMethodHander(type = FlowableEngineEventType.TASK_COMPLETED)
    public String handerTaskProcess(FlowableEntityEventImpl event){
        System.out.println("当前用户任务处理成功");
        Map variables =new HashMap();
        List<String> userList = new ArrayList<>();
        userList.add("10003");
        userList.add("10004");
        variables.put("form_userList",userList);
        //设置变量
        runtimeService.setVariables(event.getExecutionId(),variables);
        //清除缓存 不然缓存的数据不对
        Cache cache = cacheManager.getCache(FlowConstant.CACHE_PROCESS_HIGHLIGHTEDNODES);
        cache.evictIfPresent(event.getProcessInstanceId());
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
