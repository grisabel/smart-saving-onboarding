import { RegisterRequestModel } from "./model/request/RegisterRequestModel";

export interface UserInterfaceRepository {
  register(requestModel: RegisterRequestModel): Promise<void>;
}
