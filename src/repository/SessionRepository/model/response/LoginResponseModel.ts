export interface LoginResponseModel {
  accessToken: string;
  refreshToken: string;
  token_type: "bearer";
  expires: number;
}
