import { LoginRequestModel } from "./model/request/LoginRequestModel";
import { LoginResponseModel } from "./model/response/LoginResponseModel";

export interface SessionInterfaceRepository {
  login(requestModel: LoginRequestModel): Promise<LoginResponseModel>;
}
