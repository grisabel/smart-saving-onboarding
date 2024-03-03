import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";
import { PasswordHttpRepository } from "./PasswordHttpRepository";

const mockHttp = HttpMockAdapterFactory.getInstance();

mockHttp.onPost(
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/user/reset-password",
  () => {
    return Promise.resolve({
      response: {
        message: "Se ha enviado un email para cambiar la contraseña",
      },
      status: 200,
    });
  }
);

mockHttp.onPost(
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
    "/user/reset-password/:operationId/confirm",
  () => {
    return Promise.resolve({
      response: {
        message: "Contraseña actualizada satisfactoriamente",
      },
      status: 200,
    });
  }
);

export class PasswordMockRepository extends PasswordHttpRepository {}
