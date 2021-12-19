package com.dragon.flow.collector;


import com.dragon.flow.annotation.FlowHander;
import org.springframework.beans.factory.config.BeanPostProcessor;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;


/**
 * 收集所有加了FlowHander注解的类信息
 */
//@Configuration
public class FlowHanderCollector implements BeanPostProcessor {

    private Map<String, Class> handers = new ConcurrentHashMap<>();

    //所有对象初始化前处理
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) {
        final Class<?> beanClass = bean.getClass();
        if (beanClass.isAnnotationPresent(FlowHander.class)) {
            FlowHander annotation = beanClass.getAnnotation(FlowHander.class);
            String[] value = annotation.value();
            if (value.length == 0) {
                throw new RuntimeException(beanClass.getName() + "类，FlowHander注解中的value不能为空，请设置流程key");
            }
            for (int i = 0; i < value.length; i++) {
                handers.put(value[i], beanClass);
            }
        }
        return bean;
    }

    //初始化后处理
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) {
        return bean;
    }

    public Class getClassName(String flowKey) {
        return handers.get(flowKey);
    }
}
