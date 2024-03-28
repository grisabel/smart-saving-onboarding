import { HttpService } from "@/utils/Http/HttpService";
import { CalculatorInterfaceRepository } from "./CalculatorInterfaceRepository";

import { CompountInterestRequestModel } from "./model/request/CompountInterestRequestModel";
import { CompountInterestResponseModel } from "./model/response/CompountInterestResponseModel";

export class CalculatorHttpRepository implements CalculatorInterfaceRepository {
  constructor(private http: HttpService) {}

  compountInterest(
    requestModel: CompountInterestRequestModel
  ): Promise<CompountInterestResponseModel[]> {
    return new Promise((resolve, reject) => {
      return this.http
        .get<CompountInterestResponseModel>({
          endpoint:
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
            "/financial-control/compound-interest?initialCapital=:initialCapital&annualContribution=:annualContribution&rateInterest=:rateInterest&period=:period"
              .replace(
                ":annualContribution",
                `${requestModel.annualContribution}`
              )
              .replace(":initialCapital", `${requestModel.initialCapital}`)
              .replace(":period", `${requestModel.period}`)
              .replace(":rateInterest", `${requestModel.rateInterest}`),
        })
        .then((response) => {
          try {
            switch (response.status) {
              case 204:
                resolve(response.json());
                break;

              default:
                reject();
                break;
            }
          } catch (error) {
            console.log("Error in response.json()");
            reject();
          }
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
          reject();
        });
    });
  }
}
