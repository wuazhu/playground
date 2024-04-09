import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '游乐园',
  },
  // 菜单配置 https://umijs.org/docs/max/layout-menu#hideinxxx
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: '登录',
      component: './Login',
      layout: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon: 'HomeTwoTone',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      icon: 'HomeTwoTone',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
      icon: 'HomeTwoTone',
    },
    {
      name: '404',
      path: '*',
      component: './404',
      icon: 'HomeTwoTone',
      hideInMenu: true,
    },
  ],
  npmClient: 'pnpm',
});
