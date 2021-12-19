package com.dragon.flow.config;


import com.dragon.flow.listener.global.GlobalFlowEventListener;
import org.flowable.common.engine.api.delegate.event.FlowableEngineEventType;
import org.flowable.common.engine.api.delegate.event.FlowableEventDispatcher;
import org.flowable.spring.SpringProcessEngineConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;

/**
 * @author : bruce.liu
 * @title: : FlowableGlobListenerConfig
 * @projectName : flowable
 * @description: 全局监听配置 ContextRefreshedEvent在类被初始化之后触发
 * @date : 2021/05/11
 */
@Configuration
public class FlowableGlobListenerConfig implements ApplicationListener<ContextRefreshedEvent> {
    @Autowired
    private SpringProcessEngineConfiguration configuration;
    @Autowired
    private GlobalFlowEventListener globalFlowEventListener;


    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        FlowableEventDispatcher dispatcher = configuration.getEventDispatcher();
        //添加流程实例创建全局监听
        dispatcher.addEventListener(globalFlowEventListener,
                FlowableEngineEventType.PROCESS_STARTED, //流程开始事件
                FlowableEngineEventType.PROCESS_COMPLETED,//流程结束事件
                FlowableEngineEventType.PROCESS_CANCELLED,////流程取消
                FlowableEngineEventType.TASK_CREATED,//用户任务创建事件
                FlowableEngineEventType.TASK_COMPLETED//用户任务结束事件
        );

    }
}
