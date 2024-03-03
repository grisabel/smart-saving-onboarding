import { PasswordInterfaceRepository } from "./PasswordInterfaceRepository";
import { PasswordHttpRepository } from "./PasswordHttpRepository";
import { PasswordMockRepository } from "./PasswordMockRepository";
import { HttpFactory } from "@/utils/Http/HttpFactory";
import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";

export class PasswordFactoryRepository {
  private static instance: PasswordInterfaceRepository | null = null;

  static getInstance(): PasswordInterfaceRepository {
    if (!PasswordFactoryRepository.instance) {
      if (process.env.NEXT_PUBLIC_APP_ENV === "production") {
        const http = HttpFactory.getInstance();
        PasswordFactoryRepository.instance = new PasswordHttpRepository(http);
      } else {
        const httpMock = HttpMockAdapterFactory.getInstance();
        PasswordFactoryRepository.instance = new PasswordMockRepository(
          httpMock
        );
      }
    }
    return PasswordFactoryRepository.instance;
  }
}
