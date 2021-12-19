package com.dragon.flow.annotation;

import java.lang.annotation.*;

/**
 * 流程处理类
 * @author qy
 * @date 2020/2/3
 * <p>

 */
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface FlowHander {
    /**
     * 流程key
     */
    String[] value() ;
}
