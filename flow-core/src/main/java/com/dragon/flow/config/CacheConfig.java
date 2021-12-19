package com.dragon.flow.config;

import com.dragon.flow.customcache.CustomDeploymentCache;
import com.dragon.flow.customcache.CustomProcessDefinitionInfoCache;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @Description: 缓存配置
 * @Author: Bruce.liu
 * @Since:13:08 2021/1/25
 */
@Configuration
@EnableCaching
public class CacheConfig {
    @Bean
    public CustomDeploymentCache customDeploymentCache(){
        return new CustomDeploymentCache();
    }
    @Bean
    public CustomProcessDefinitionInfoCache customProcessDefinitionInfoCache(){
        return new CustomProcessDefinitionInfoCache();
    }


}
