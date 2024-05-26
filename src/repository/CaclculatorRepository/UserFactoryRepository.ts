import { CalculatorInterfaceRepository } from "./CalculatorInterfaceRepository";
import { CalculatorHttpRepository } from "./CalculatorHttpRepository";
import { UserMockRepository } from "./CalculatorMockRepository";
import { HttpFactory } from "@/utils/Http/HttpFactory";
import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";

export class CalculatorFactoryRepository {
  private static instance: CalculatorInterfaceRepository | null = null;

  static getInstance(): CalculatorInterfaceRepository {
    if (!CalculatorFactoryRepository.instance) {
      if (process.env.NEXT_PUBLIC_APP_ENV === "production") {
        const http = HttpFactory.getInstance();
        CalculatorFactoryRepository.instance = new CalculatorHttpRepository(http);
      } else {
        const httpMock = HttpMockAdapterFactory.getInstance();
        CalculatorFactoryRepository.instance = new UserMockRepository(httpMock);
      }
    }
    return CalculatorFactoryRepository.instance;
  }
}
