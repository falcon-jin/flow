package com.dragon.flow.annotation;

import org.flowable.common.engine.api.delegate.event.FlowableEngineEventType;

import java.lang.annotation.*;

/**
 * 流程处理类
 * @author qy
 * @date 2020/2/3
 * <p>

 */
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface FlowMethodHander {
    /**
     * 流程类型
     */
    FlowableEngineEventType type() ;

    /**
     * 任务key
     * @return
     */
    String[] taskKey() default "" ;
}
