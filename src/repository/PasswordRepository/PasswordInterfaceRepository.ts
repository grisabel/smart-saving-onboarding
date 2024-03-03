import { RetrievePasswordRequestModel } from "./model/request/RetrievePasswordRequestModel";
import { RetrievePasswordResponseModel } from "./model/response/RetrievePasswordResponseModel";

export interface PasswordInterfaceRepository {
  retrieve(
    requestModel: RetrievePasswordRequestModel
  ): Promise<RetrievePasswordResponseModel>;
}
