import { HttpService } from "@/utils/Http/HttpService";
import { SessionInterfaceRepository } from "./SessionInterfaceRepository";
import { LoginRequestModel } from "./model/request/LoginRequestModel";
import { LoginResponseModel } from "./model/response/LoginResponseModel";

export class SessionHttpRepository implements SessionInterfaceRepository {
  constructor(private http: HttpService) {}

  login(requestModel: LoginRequestModel): Promise<LoginResponseModel> {
    return new Promise((resolve, reject) => {
      return this.http
        .post({
          endpoint: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/session/login",
          body: {
            email: requestModel.email,
            password: requestModel.password,
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
