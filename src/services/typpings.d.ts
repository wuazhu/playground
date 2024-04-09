declare namespace API {
  interface BaseResponse {
    success: boolean;
    message: string;
    code: number;
  }
  interface UserInfo {
    id: string;
    userName?: string;
    role: string;
  }
  interface RespUserInfo extends BaseResponse {
    data: UserInfo;
  }
}
