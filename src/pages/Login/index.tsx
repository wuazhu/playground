import { UID } from '@/constants';
import { ApiUser } from '@/services';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';
import { message } from 'antd';

export default () => {
  const { setInitialState } = useModel('@@initialState');
  const [messageApi, contextHolder] = message.useMessage();
  const routeState = history.location.state as { redirect: string };
  console.log('🚀 ~ routeState:', routeState);

  return (
    <ProConfigProvider>
      {contextHolder}
      <div
        style={{
          backgroundColor: 'white',
          height: '100vh',
        }}
      >
        <LoginFormPage
          backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
          //   backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          backgroundVideoUrl="http://images-wuazhu.test.upcdn.net/bg2.mp4"
          title="游乐园登录"
          containerStyle={{
            // backgroundColor: 'rgba(0, 0, 0,0.35)',
            backdropFilter: 'blur(4px)',
          }}
          subTitle="subtitle"
          onFinish={async ({ userName, password }) => {
            const { code, data, message } = await ApiUser.doLogin({
              userName,
              password,
            });
            console.log('🚀 ~ onFinish={ ~ code:', code, data, message);
            if (code === 0) {
              messageApi.open({
                type: 'success',
                content: message,
              });
              setInitialState(data);
              localStorage.setItem(UID, data.id);
              console.log('🚀 ~ onFinish={ ~ routeState:', routeState);
              history.push(
                routeState && routeState.redirect ? routeState.redirect : '/',
              );
            } else {
              messageApi.open({
                type: 'error',
                content: message,
              });
            }
          }}
        >
          <ProFormText
            name="userName"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[{ required: true, message: '请输入用户名!' }]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={'密码: ant.design'}
            rules={[{ required: true, message: '请输入密码！' }]}
          />
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div>
        </LoginFormPage>
      </div>
    </ProConfigProvider>
  );
};
