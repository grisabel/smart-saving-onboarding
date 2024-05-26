import { CompountInterestRequestModel } from "./model/request/CompountInterestRequestModel";
import { CompountInterestResponseModel } from "./model/response/CompountInterestResponseModel";

export interface CalculatorInterfaceRepository {
  compountInterest(requestModel: CompountInterestRequestModel): Promise<CompountInterestResponseModel[]>;
}
