package com.aac.optics.provider.organization.service.impl;

import com.aac.optics.provider.organization.service.IRoleMenuService;
import com.alicp.jetcache.anno.CacheInvalidate;
import com.alicp.jetcache.anno.CacheType;
import com.alicp.jetcache.anno.Cached;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.aac.optics.provider.organization.dao.RoleMapper;
import com.aac.optics.provider.organization.entity.param.RoleQueryParam;
import com.aac.optics.provider.organization.entity.po.Role;
import com.aac.optics.provider.organization.exception.RoleNotFoundException;
import com.aac.optics.provider.organization.service.IRoleResourceService;
import com.aac.optics.provider.organization.service.IRoleService;
import com.aac.optics.provider.organization.service.IUserRoleService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Set;

@Service
@Slf4j
public class RoleService extends ServiceImpl<RoleMapper, Role> implements IRoleService {

    @Autowired
    private IUserRoleService userRoleService;

    @Autowired
    private IRoleResourceService roleResourceService;

    @Autowired
    private IRoleMenuService roleMenuService;

    @Override
    public boolean add(Role role) {
        boolean isSuccess = this.save(role);
        roleResourceService.saveBatch(role.getId(), role.getResourceIds());
        roleMenuService.saveBatch(role.getId(), role.getMenuIds());
        return isSuccess;
    }

    @Override
    @CacheInvalidate(name = "role::", key = "#id")
    public boolean delete(Long id) {
        roleResourceService.removeByRoleId(id);
        roleMenuService.removeByRoleId(id);
        return this.removeById(id);
    }

    @Override
    @CacheInvalidate(name = "role::", key = "#role.id")
    public boolean update(Role role) {
        boolean isSuccess = this.updateById(role);
        roleResourceService.saveBatch(role.getId(), role.getResourceIds());
        roleMenuService.saveBatch(role.getId(), role.getMenuIds());
        return isSuccess;
    }

    @Override
    @Cached(name = "role::", key = "#id", cacheType = CacheType.BOTH)
    public Role get(Long id) {
        Role role = this.getById(id);
        if (Objects.isNull(role)) {
            throw new RoleNotFoundException("role not found with id:" + id);
        }
        role.setResourceIds(roleResourceService.queryByRoleId(id));
        return role;
    }

    @Override
    public List<Role> getAll() {
        return this.list();
    }

    @Override
    @Cached(name = "role4user::", key = "#userId", cacheType = CacheType.BOTH)
    public List<Role> query(Long userId) {
        Set<Long> roleIds = userRoleService.queryByUserId(userId);
        return (List<Role>) this.listByIds(roleIds);
    }

    @Override
    public IPage<Role> query(Page page, RoleQueryParam roleQueryParam) {
        QueryWrapper<Role> queryWrapper = roleQueryParam.build();
        queryWrapper.eq(StringUtils.isNotBlank(roleQueryParam.getName()), "name", roleQueryParam.getName());
        queryWrapper.eq(StringUtils.isNotBlank(roleQueryParam.getCode()), "code", roleQueryParam.getCode());
        return this.page(page, queryWrapper);
    }
}
