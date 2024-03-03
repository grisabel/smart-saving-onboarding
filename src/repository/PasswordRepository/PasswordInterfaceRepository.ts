import { RetrievePasswordRequestModel } from "./model/request/RetrievePasswordRequestModel";
import { RetrievePasswordResponseModel } from "./model/response/RetrievePasswordResponseModel";
import { ResetPasswordRequestModel } from "./model/request/ResetPasswordRequestModel";
import { ResetPasswordResponseModel } from "./model/response/ResetPasswordResponseModel";

export interface PasswordInterfaceRepository {
  retrieve(
    requestModel: RetrievePasswordRequestModel
  ): Promise<RetrievePasswordResponseModel>;
  reset(
    requestModel: ResetPasswordRequestModel
  ): Promise<ResetPasswordResponseModel>;
}
