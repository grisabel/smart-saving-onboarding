import { SessionInterfaceRepository } from "./SessionInterfaceRepository";
import { SessionHttpRepository } from "./SessionHttpRepository";
import { SessionMockRepository } from "./SessionMockRepository";
import { HttpFactory } from "@/utils/Http/HttpFactory";
import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";

export class SessionFactoryRepository {
  private static instance: SessionInterfaceRepository | null = null;

  static getInstance(): SessionInterfaceRepository {
    if (!SessionFactoryRepository.instance) {
      if (process.env.NODE_ENV === "production") {
        const http = HttpFactory.getInstance();
        SessionFactoryRepository.instance = new SessionHttpRepository(http);
      } else {
        const httpMock = HttpMockAdapterFactory.getInstance();
        SessionFactoryRepository.instance = new SessionMockRepository(httpMock);
      }
    }
    return SessionFactoryRepository.instance;
  }
}
