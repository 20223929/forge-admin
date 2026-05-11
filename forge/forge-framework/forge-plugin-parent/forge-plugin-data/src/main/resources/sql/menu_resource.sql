-- 菜单资源：数据资产管理
INSERT INTO `sys_resource` (`id`, `tenant_id`, `parent_id`, `resource_name`, `resource_code`, `resource_type`, `route_path`, `component_path`, `icon`, `sort`, `status`, `visible`, `create_by`, `create_time`, `create_dept`, `update_by`, `update_time`) VALUES 
(10001, 1, 0, '数据资产', 'data', 'MENU', '/data', NULL, 'DataAnalysisOutlined', 600, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10002, 1, 10001, '数据连接', 'data-connection', 'MENU', '/data/connection', '/data/connection.vue', 'DatabaseOutlined', 1, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10003, 1, 10001, '数据集管理', 'data-dataset', 'MENU', '/data/dataset', '/data/dataset.vue', 'TableOutlined', 2, 1, 1, 'admin', NOW(), 1, 'admin', NOW());

-- 权限资源：数据连接管理
INSERT INTO `sys_resource` (`id`, `tenant_id`, `parent_id`, `resource_name`, `resource_code`, `resource_type`, `api_path`, `api_method`, `sort`, `status`, `visible`, `create_by`, `create_time`, `create_dept`, `update_by`, `update_time`) VALUES 
(10004, 1, 10002, '查询数据连接列表', 'data:connection:list', 'BUTTON', '/data/connection/page', 'GET', 1, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10005, 1, 10002, '新增数据连接', 'data:connection:add', 'BUTTON', '/data/connection', 'POST', 2, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10006, 1, 10002, '修改数据连接', 'data:connection:edit', 'BUTTON', '/data/connection', 'PUT', 3, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10007, 1, 10002, '删除数据连接', 'data:connection:remove', 'BUTTON', '/data/connection/:id', 'DELETE', 4, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10008, 1, 10002, '测试数据连接', 'data:connection:test', 'BUTTON', '/data/connection/:id/test', 'POST', 5, 1, 1, 'admin', NOW(), 1, 'admin', NOW());

-- 权限资源：数据集管理
INSERT INTO `sys_resource` (`id`, `tenant_id`, `parent_id`, `resource_name`, `resource_code`, `resource_type`, `api_path`, `api_method`, `sort`, `status`, `visible`, `create_by`, `create_time`, `create_dept`, `update_by`, `update_time`) VALUES 
(10009, 1, 10003, '查询数据集列表', 'data:dataset:list', 'BUTTON', '/data/dataset/page', 'GET', 1, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10010, 1, 10003, '新增数据集', 'data:dataset:add', 'BUTTON', '/data/dataset', 'POST', 2, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10011, 1, 10003, '修改数据集', 'data:dataset:edit', 'BUTTON', '/data/dataset', 'PUT', 3, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10012, 1, 10003, '删除数据集', 'data:dataset:remove', 'BUTTON', '/data/dataset/:id', 'DELETE', 4, 1, 1, 'admin', NOW(), 1, 'admin', NOW()),
(10013, 1, 10003, '预览数据集', 'data:dataset:preview', 'BUTTON', '/data/dataset/:id/preview', 'POST', 5, 1, 1, 'admin', NOW(), 1, 'admin', NOW());

-- 角色授权：超级管理员默认拥有数据资产权限
INSERT INTO `sys_role_resource` (`id`, `tenant_id`, `role_id`, `resource_id`, `create_by`, `create_time`, `create_dept`) VALUES 
(10001, 1, 1, 10001, 'admin', NOW(), 1),
(10002, 1, 1, 10002, 'admin', NOW(), 1),
(10003, 1, 1, 10003, 'admin', NOW(), 1),
(10004, 1, 1, 10004, 'admin', NOW(), 1),
(10005, 1, 1, 10005, 'admin', NOW(), 1),
(10006, 1, 1, 10006, 'admin', NOW(), 1),
(10007, 1, 1, 10007, 'admin', NOW(), 1),
(10008, 1, 1, 10008, 'admin', NOW(), 1),
(10009, 1, 1, 10009, 'admin', NOW(), 1),
(10010, 1, 1, 10010, 'admin', NOW(), 1),
(10011, 1, 1, 10011, 'admin', NOW(), 1),
(10012, 1, 1, 10012, 'admin', NOW(), 1),
(10013, 1, 1, 10013, 'admin', NOW(), 1);