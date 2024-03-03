import { HttpService } from "@/utils/Http/HttpService";
import { PasswordInterfaceRepository } from "./PasswordInterfaceRepository";
import { RetrievePasswordRequestModel } from "./model/request/RetrievePasswordRequestModel";
import { RetrievePasswordResponseModel } from "./model/response/RetrievePasswordResponseModel";
import { ResetPasswordRequestModel } from "./model/request/ResetPasswordRequestModel";
import { ResetPasswordResponseModel } from "./model/response/ResetPasswordResponseModel";
export class PasswordHttpRepository implements PasswordInterfaceRepository {
  constructor(private http: HttpService) {}

  retrieve(
    requestModel: RetrievePasswordRequestModel
  ): Promise<RetrievePasswordResponseModel> {
    return new Promise((resolve, reject) => {
      return this.http
        .post({
          endpoint:
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/user/reset-password",
          body: {
            email: requestModel.email,
            dateBirth: requestModel.dateBirth,
          },
        })
        .then((response) => {
          try {
            switch (response.status) {
              case 200:
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

  reset(
    requestModel: ResetPasswordRequestModel
  ): Promise<ResetPasswordResponseModel> {
    return new Promise((resolve, reject) => {
      return this.http
        .post({
          endpoint:
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
            `/user/reset-password/${requestModel.operationId}/confirm`,
          body: {
            password: requestModel.password,
            repeatPassword: requestModel.repeatPassword,
          },
        })
        .then((response) => {
          try {
            switch (response.status) {
              case 200:
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
