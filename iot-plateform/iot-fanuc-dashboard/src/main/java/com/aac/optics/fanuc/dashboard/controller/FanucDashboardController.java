package com.aac.optics.fanuc.dashboard.controller;

import com.aac.optics.common.core.vo.Result;
import com.aac.optics.fanuc.dashboard.service.FanucAlarmDataService;
import com.aac.optics.fanuc.dashboard.service.FanucCondDataService;
import com.aac.optics.fanuc.dashboard.service.FanucDashboardService;
import com.aac.optics.fanuc.dashboard.service.FanucMonitDataService;
import com.alibaba.csp.sentinel.annotation.SentinelResource;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/fanucDashboard")
@Api("fanuc")
@Slf4j
public class FanucDashboardController {

    @Autowired
    FanucDashboardService fanucDashboardService;

    @Autowired
    FanucCondDataService fanucCondDataService;

    @Autowired
    FanucMonitDataService fanucMonitDataService;

    @Autowired
    FanucAlarmDataService fanucAlarmDataService;

    @ApiOperation(value = "查询机台详细数据", notes = "查询机台详细数据")
    @ApiImplicitParam(name = "machineName", value = "机台号", required = true, dataType = "String")
    @GetMapping("/getDetailInfo")
    public Result getDetailInfo(@RequestParam String machineName) {
        return Result.success(fanucDashboardService.getDetailInfo(machineName));
    }

    @ApiOperation(value = "按楼层查询机台实时信息", notes = "按楼层查询机台实时信息")
    @ApiImplicitParam(name = "floor", value = "楼层", required = true, dataType = "String")
    @GetMapping("/getByFloor")
    public Result getByFloor() {
        return Result.success(fanucDashboardService.getByFloor());
    }

    @ApiOperation(value = "按时间查询机台Cond数据", notes = "按时间查询机台Cond数据")
    @ApiImplicitParam(name = "params", value = "参数", required = true, dataType = "Map")
    @PostMapping("/getCondData")
    public Result getCondData(@RequestBody Map<String, String> params) {
        return Result.success(fanucCondDataService.getCondDataByTime(params.get("startTime"),
                params.get("endTime"),
                params.get("machineName")));
    }

    @ApiOperation(value = "按时间查询机台Monit数据", notes = "按时间查询机台Monit数据")
    @ApiImplicitParam(name = "params", value = "参数", required = true, dataType = "Map")
    @PostMapping("/getMonitData")
    public Result getMonitData(@RequestBody Map<String, String> params) {
        return Result.success(fanucMonitDataService.getMonitDataByTime(params.get("startTime"),
                params.get("endTime"),
                params.get("machineName")));
    }

    @ApiOperation(value = "按时间查询机台Alarm数据", notes = "按时间查询机台Alarm数据")
    @ApiImplicitParam(name = "params", value = "参数", required = true, dataType = "Map")
    @PostMapping("/getAlarmData")
    public Result getAlarmData(@RequestBody Map<String, String> params) {
        return Result.success(fanucAlarmDataService.getAlarmDataByTime(params.get("startTime"),
                params.get("endTime"),
                params.get("machineName")));
    }

    @ApiOperation(value = "查询机台实时状态数量", notes = "查询机台实时状态数量")
    @GetMapping("/getStatusCount")
    public Result getStatusCount() {
        return Result.success(fanucDashboardService.getStatusCount());
    }
}