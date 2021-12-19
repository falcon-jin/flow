package com.dragon.flow.mapper.flowable;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dragon.flow.model.flowable.FlowableActHiActinst;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-06 14:05
 **/
public interface IFlowableActHiActinstMapper extends BaseMapper<FlowableActHiActinst> {

    List<FlowableActHiActinst> getActHiActinstsByProcessInstanceIdAndActId(@Param("processInstanceId") String processInstanceId, @Param("disActivityId")String disActivityId) ;

}
