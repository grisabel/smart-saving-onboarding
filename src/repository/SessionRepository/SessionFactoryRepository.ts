import { SessionInterfaceRepository } from "./SessionInterfaceRepository";
import { SessionHttpRepository } from "./SessionHttpRepository";
import { SessionMockRepository } from "./SessionMockRepository";

export class SessionFactoryRepository {
  private static instance: SessionInterfaceRepository | null = null;

  static getInstance(): SessionInterfaceRepository {
    if (!SessionFactoryRepository.instance) {
      if (process.env.NODE_ENV === "production") {
        SessionFactoryRepository.instance = new SessionHttpRepository();
      } else {
        SessionFactoryRepository.instance = new SessionMockRepository();
      }
    }
    return SessionFactoryRepository.instance;
  }
}
