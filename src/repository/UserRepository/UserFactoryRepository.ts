import { UserInterfaceRepository } from "./UserInterfaceRepository";
import { UserHttpRepository } from "./UserHttpRepository";
import { UserMockRepository } from "./UserMockRepository";
import { HttpFactory } from "@/utils/Http/HttpFactory";
import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";

export class UserFactoryRepository {
  private static instance: UserInterfaceRepository | null = null;

  static getInstance(): UserInterfaceRepository {
    if (!UserFactoryRepository.instance) {
      if (process.env.NEXT_PUBLIC_APP_ENV === "production") {
        const http = HttpFactory.getInstance();
        UserFactoryRepository.instance = new UserHttpRepository(http);
      } else {
        const httpMock = HttpMockAdapterFactory.getInstance();
        UserFactoryRepository.instance = new UserMockRepository(httpMock);
      }
    }
    return UserFactoryRepository.instance;
  }
}
