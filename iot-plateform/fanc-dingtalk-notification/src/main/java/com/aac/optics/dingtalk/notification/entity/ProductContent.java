package com.aac.optics.dingtalk.notification.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@EqualsAndHashCode()
@Accessors(chain = true)
@TableName("tab_01_product_content")
public class ProductContent implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;

    private String tabDate;

    private String bachId;

    private String tabType;

    private String title;

    private String titleTime;

    private Integer tabProductSeq;

    private String tabProductType;

    private BigDecimal shipQty;

    private BigDecimal shipAmount;

    private BigDecimal shipPlanQty;

    private BigDecimal shipPlanAmount;

    private BigDecimal shipQtyRate;

    private BigDecimal shipAmountRate;

    private String subTabProductType;

    private BigDecimal subShipQty;

    private BigDecimal subShipAmount;

    private String dayTabProductType;

    private BigDecimal dayShipQty;

    private BigDecimal dayShipPlanQty;

    private BigDecimal dayShipQtyRate;

    private String flag;

    private String createdBy;

    private LocalDateTime createTime;

    private String modifyBy;

    private LocalDateTime modifyTime;
}