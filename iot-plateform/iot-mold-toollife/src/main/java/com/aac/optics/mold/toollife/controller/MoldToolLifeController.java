package com.aac.optics.mold.toollife.controller;

import com.aac.optics.common.core.exception.SystemErrorType;
import com.aac.optics.common.core.vo.Result;
import com.aac.optics.mold.toollife.entity.ToolInfo;
import com.aac.optics.mold.toollife.service.EquipInfoService;
import com.aac.optics.mold.toollife.service.MatInfoService;
import com.aac.optics.mold.toollife.service.ToolInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/toolLife")
@Api("moldToolLife")
@Slf4j
public class MoldToolLifeController {
    @Autowired
    ToolInfoService toolInfoService;

    @Autowired
    EquipInfoService equipInfoService;

    @Autowired
    MatInfoService matInfoService;


    @ApiOperation(value = "刀具寿命Excel上传", notes = "刀具寿命Excel上传")
    @ApiImplicitParam(name = "file", value = "Excel文件", required = true, dataType = "MultipartFile")
    @PostMapping("/uploadExcel")
    public Result uploadExcel(@RequestPart("file") MultipartFile file) {
        String monitorNo = "";
        try {
            monitorNo = toolInfoService.phaseExcelData(file.getInputStream());
            return Result.success(monitorNo);
        } catch (Exception e) {
            return Result.fail(SystemErrorType.SYSTEM_ERROR);
        }
    }

    @ApiOperation(value = "根据MonitorNo查询刀具寿命Excel", notes = "根据MonitorNo查询刀具寿命Excel")
    @ApiImplicitParam(name = "monitorNo", value = "监控号", required = true, dataType = "String")
    @GetMapping("/getByMonitorNo")
    public Result getByMonitorNo(@RequestParam String monitorNo) {
        return Result.success(toolInfoService.getToolInfo(monitorNo));
    }

    @ApiOperation(value = "更新机台号，刀位，刀具编号", notes = "更新机台号，刀位，刀具编号")
    @ApiImplicitParam(name = "toolInfo", value = "信息", required = true, dataType = "ToolInfo")
    @PostMapping("/updateToolInfo")
    public Result updateToolInfo(@RequestBody List<ToolInfo> toolInfos) {
        boolean res = toolInfoService.updateToolLifeInfo(toolInfos);
        if (res) {
            return Result.success();
        } else {
            return Result.fail();
        }
    }

    @ApiOperation(value = "获取机台号列表", notes = "获取机台号列表")
    @GetMapping("/allMachine")
    public Result getAllMachine() {
        return Result.success(equipInfoService.getMachineNames());
    }

    @ApiOperation(value = "获取刀具刀柄信息", notes = "获取刀具刀柄信息")
    @GetMapping("/allMatInfo")
    public Result getAllMatInfo() {
        return Result.success(matInfoService.getMatInfo());
    }
}