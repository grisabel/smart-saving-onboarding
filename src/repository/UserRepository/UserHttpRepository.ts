import { HttpService } from "@/utils/Http/HttpService";
import { UserInterfaceRepository } from "./UserInterfaceRepository";
import { RegisterRequestModel } from "./model/request/RegisterRequestModel";

export class UserHttpRepository implements UserInterfaceRepository {
  constructor(private http: HttpService) {}

  register(requestModel: RegisterRequestModel): Promise<void> {
    return new Promise((resolve, reject) => {
      return this.http
        .post({
          endpoint: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/user/register",
          body: {
            firstName: requestModel.firstName,
            lastName: requestModel.lastName,
            dateBirth: requestModel.dateBirth,
            objetive: requestModel.objetive,
            email: requestModel.email,
            repeatEmail: requestModel.repeatEmail,
            password: requestModel.password,
            repeatPassword: requestModel.repeatPassword,
          },
        })
        .then((response) => {
          try {
            switch (response.status) {
              case 204:
                resolve();
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
