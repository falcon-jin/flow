package com.dragon.flow.config;

import com.dragon.flow.juel.FlowJuel;
import com.dragon.flow.juel.IExpressionService;
import com.dragon.flow.juel.impl.ExpressionServiceImpl;
import com.dragon.tools.common.SpringContextHolder;
import org.flowable.common.engine.impl.de.odysseus.el.misc.TypeConverter;
import org.flowable.engine.ManagementService;
import org.flowable.engine.RuntimeService;
import org.flowable.engine.impl.cfg.ProcessEngineConfigurationImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * @program: flow
 * @description: 流程配置
 * @author: Bruce.Liu
 * @create: 2021-04-01 23:36
 **/
@Configuration
@ComponentScan({"com.dragon.flow.service.*","com.dragon.flow.mapper.model"})
public class FlowConfig {
    @Bean
    public SpringContextHolder springContextHolder() {
        SpringContextHolder springContextHolder = new SpringContextHolder();
        return springContextHolder;
    }

    @Bean( "fuel")
    public FlowJuel flowJuel() {
       return new FlowJuel();
    }
    @Bean
    public IExpressionService expressionService(
            ProcessEngineConfigurationImpl processEngineConfiguration,
            RuntimeService runtimeService,
            TypeConverter typeConverter,
            ManagementService managementService) {
        return new ExpressionServiceImpl(processEngineConfiguration,runtimeService,typeConverter,managementService);
    }

}
