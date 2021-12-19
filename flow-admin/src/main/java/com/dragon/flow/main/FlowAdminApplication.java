package com.dragon.flow.main;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @ClassName FlowManagerApplication
 * @Description 后台管理入口
 * @Author bruce.liu
 * @Date 2021/3/16/016 20:52
 * @Version 1.0
 **/
@EnableAsync
@EnableAspectJAutoProxy
@EnableScheduling
@EnableTransactionManagement
@SpringBootApplication(scanBasePackages = "com.dragon.flow")
@Import(cn.hutool.extra.spring.SpringUtil.class)
public class FlowAdminApplication {
    private static final Logger logger = LoggerFactory.getLogger(FlowAdminApplication.class);

    public static void main(String[] args) {
        ConfigurableApplicationContext run = SpringApplication.run(FlowAdminApplication.class, args);
        logger.info("###########################流程后台程序启动成功##################################");
    }
}
