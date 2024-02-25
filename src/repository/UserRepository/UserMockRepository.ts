import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";
import { UserHttpRepository } from "./UserHttpRepository";

const httpMock = HttpMockAdapterFactory.getInstance();

httpMock.onPost(
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/user/register",
  () => {
    return Promise.resolve({
      status: 204,
      response: null,
    });
  }
);

export class UserMockRepository extends UserHttpRepository {}
