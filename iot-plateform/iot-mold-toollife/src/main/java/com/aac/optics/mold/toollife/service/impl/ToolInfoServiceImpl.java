package com.aac.optics.mold.toollife.service.impl;

import com.aac.optics.mold.toollife.dao.ToolInfoMapper;
import com.aac.optics.mold.toollife.entity.ToolInfo;
import com.aac.optics.mold.toollife.service.ToolInfoService;
import com.aac.optics.mold.toollife.util.ExcelUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;


@Service
@Slf4j
public class ToolInfoServiceImpl extends ServiceImpl<ToolInfoMapper, ToolInfo> implements ToolInfoService {

    @Override
    public String phaseExcelData(InputStream in) {
        List<String[]> excelDataList;
        List<ToolInfo> toolInfos = new ArrayList<>();
        String monitorNo = "";
        try {
            excelDataList = ExcelUtil.read(in).get(0);
            String workpiece = excelDataList.get(3)[2];
            monitorNo = excelDataList.get(3)[12];
            String material = excelDataList.get(14)[17];
            Pattern isNum = Pattern.compile("^[\\d]*$");
            Pattern isSwo = Pattern.compile("^O[\\d]*$");
            String tempRoute = "";
            for (String[] strings : excelDataList) {
                if (!StringUtils.isBlank(strings[1]) & (isNum.matcher(strings[1]).matches() || isSwo.matcher(strings[1]).matches())) {
                    ToolInfo toolInfo = new ToolInfo();
                    toolInfo.setWorkpiece(workpiece)
                            .setMonitorNo(monitorNo)
                            .setMaterial(material);
                    if (!StringUtils.isBlank(strings[0])) {
                        toolInfo.setRoute(strings[0]);
                        tempRoute = strings[0];
                    } else {
                        toolInfo.setRoute(tempRoute);
                    }
                    toolInfo.setProgramName(strings[1])
                            .setToolName(strings[5])
                            .setToolDiameter(strings[7])
                            .setToolNo(strings[8])
                            .setType(strings[10])
                            .setMargin(strings[12])
                            .setToolValidLength(strings[13])
                            .setMaxDepth(strings[15])
                            .setWorkTime(strings[18])
                            .setCutDepth(strings[19])
                            .setFeed(strings[20])
                            .setRemark(strings[21])
                            .setCreateDateTime(LocalDateTime.now());
                    if (!strings[14].equals("#N/A"))
                        toolInfo.setBrand(strings[14]);

                    List<ToolInfo> ToolInfoInDb = getToolInfo(toolInfo.getMonitorNo(), toolInfo.getProgramName());
                    if (ToolInfoInDb.size() > 0) {
                        toolInfo.setId(ToolInfoInDb.get(0).getId());
                        this.updateById(toolInfo);
                    } else {
                        this.save(toolInfo);
                    }
                    toolInfos.add(toolInfo);
                }
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return monitorNo;
    }

    @Override
    public List<ToolInfo> getToolInfo(String monitorNo, String programName) {
        QueryWrapper<ToolInfo> wrapper = new QueryWrapper<>();
        wrapper.eq("monitor_no", monitorNo)
                .eq("program_name", programName);
        return this.list(wrapper);
    }

    @Override
    public List<ToolInfo> getToolInfo(String monitorNo) {
        QueryWrapper<ToolInfo> wrapper = new QueryWrapper<>();
        wrapper.eq("monitor_no", monitorNo);
        List<ToolInfo> toolInfos = list(wrapper);
        for (ToolInfo toolInfo : toolInfos) {
            toolInfo.SetMoldMatInfo();
        }
        return toolInfos;
    }


    @Transactional
    public boolean updateToolLifeInfo(List<ToolInfo> toolInfos) {
        try {
            for (ToolInfo toolInfo : toolInfos) {
                if (!StringUtils.isBlank(toolInfo.getMachineNo()) ||
                        (toolInfo.getMatInfo() != null &&
                                !StringUtils.isBlank(toolInfo.getMatInfo().getHandleCode()))) {
                    updateInfo(toolInfo);
                }
            }
            return true;
        } catch (Exception err) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }

    private void updateInfo(ToolInfo toolInfo) {
        UpdateWrapper<ToolInfo> updateWrapper = new UpdateWrapper<>();
        if (toolInfo.getMatInfo() != null) {
            updateWrapper.set("mat_handle_code", toolInfo.getMatInfo().getHandleCode())
                    .set("mat_tool_code", toolInfo.getMatInfo().getToolCode())
                    .set("mat_code", toolInfo.getMatInfo().getMatCode())
                    .set("mat_name", toolInfo.getMatInfo().getMatName());
        }
        updateWrapper.set("machine_no", toolInfo.getMachineNo())
                .eq("monitor_no", toolInfo.getMonitorNo())
                .eq("program_name", toolInfo.getProgramName());
        update(updateWrapper);
    }
}