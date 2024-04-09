import { request } from '@umijs/max';

// 用户信息
export async function userInfo(id: string, options?: { [key: string]: any }) {
  return request<API.RespUserInfo>('/api/v1/userInfo', {
    method: 'GET',
    params: {
      id,
    },
    ...(options || {}),
  });
}

export async function doLogin(
  data: {
    userName: string;
    password: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.RespUserInfo>('/api/v1/login', {
    method: 'POST',
    data,
    ...(options || {}),
  });
}
