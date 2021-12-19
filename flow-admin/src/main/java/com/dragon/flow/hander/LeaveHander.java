package com.dragon.flow.hander;

import com.dragon.flow.annotation.FlowHander;
import com.dragon.flow.annotation.FlowMethodHander;
import org.flowable.common.engine.api.delegate.event.FlowableEngineEventType;
import org.flowable.engine.delegate.event.FlowableProcessStartedEvent;

/**
 * @Author: 请假流程处理类
 * @Date: 2021/12/19 13:41
 * @Description:
 */
@FlowHander("leave")
public class LeaveHander {
    @FlowMethodHander(type = FlowableEngineEventType.PROCESS_STARTED)
    public String handerStart(FlowableProcessStartedEvent event){
        System.out.println("任务执行了，1");
        return "";
    }
}
