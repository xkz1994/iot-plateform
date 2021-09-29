package com.aac.optics.mold.toollife.dao;

import com.aac.optics.mold.toollife.entity.ToolInfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface ToolInfoMapper extends BaseMapper<ToolInfo> {
}