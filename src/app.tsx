import { RunTimeLayoutConfig, history, type RequestConfig } from '@umijs/max';
import { Button } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import LOGO from './assets/images/logo.svg';
import { UID } from './constants';
import Page403 from './pages/403';
import { ApiUser } from './services';
const isDev = process.env.NODE_ENV === 'development';

// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<API.UserInfo> {
  try {
    // 初始化后
    const uid = localStorage.getItem(UID);
    console.log('🚀 ~ 11getInitialState ~ uid:', uid);
    const user = await ApiUser.userInfo(uid as string);
    console.log('🚀 ~ 22getInitialState ~ user:', user);
    return user.data;
  } catch (error) {
    throw new Error('getInitialState error');
  }
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    title: '游乐园',
    // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    logo: LOGO,
    menu: {
      locale: false,
    },
    unAccessible: Page403(),
    // rightContentRender: () => <div>1111</div>,
    footerRender: () => <Footer />,
    menuFooterRender: () => <div>Create By wuazhu</div>,
    links: isDev
      ? [
          <Button
            type="link"
            target="_blank"
            href="https://ant-design.antgroup.com/components/overview-cn/"
            key="antd"
          >
            Ant design 组件官网
          </Button>,
          <Button
            type="link"
            target="_blank"
            href="https://procomponents.ant.design/components/form#proform"
            key="antdPro"
          >
            ProComponents 官网
          </Button>,
          <Button
            type="link"
            target="_blank"
            href="https://umijs.org/docs/guides/mock"
            key="umi"
          >
            Umi 官网
          </Button>,
        ]
      : [],
  };
};

// 请求拦截器配置 https://umijs.org/docs/max/request
export const request: RequestConfig = {
  timeout: 10000,
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [],
  responseInterceptors: [
    (response: any) => {
      const location = history.location;
      const { pathname, search } = location;
      if (!pathname.includes('/login') && response.data.code === 401) {
        console.log('401', response);
        history.push(`/login`, {
          redirect: `${pathname}${search}`,
        });
      }
      return response;
    },
  ],
};
