import type {
  HttpDeleteRequest,
  HttpGetRequest,
  HttpInterfaceService,
  HttpPatchRequest,
  HttpPostRequest,
  HttpPutRequest,
  HttpResponse,
} from "./HttpInterfaceService";
import type { BaseHttpHeader } from "./model/request/BaseHttpHeader";

const BASE_HTTP_HEADER: BaseHttpHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export class HttpService implements HttpInterfaceService {
  constructor() {}

  get<T>({ endpoint, headers }: HttpGetRequest): Promise<HttpResponse<T>> {
    return fetch(endpoint, {
      method: "GET",
      headers: {
        ...BASE_HTTP_HEADER,
        ...headers,
      },
    });
  }

  post<T>({
    endpoint,
    body,
    headers,
  }: HttpPostRequest): Promise<HttpResponse<T>> {
    return fetch(endpoint, {
      method: "POST",
      headers: {
        ...BASE_HTTP_HEADER,
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  put<T>({
    endpoint,
    body,
    headers,
  }: HttpPutRequest): Promise<HttpResponse<T>> {
    return fetch(endpoint, {
      method: "PUT",
      headers: {
        ...BASE_HTTP_HEADER,
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  patch<T>({
    endpoint,
    headers,
    body,
  }: HttpPatchRequest): Promise<HttpResponse<T>> {
    return fetch(endpoint, {
      method: "PATCH",
      headers: {
        ...BASE_HTTP_HEADER,
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  delete<T>({
    endpoint,
    headers,
  }: HttpDeleteRequest): Promise<HttpResponse<T>> {
    return fetch(endpoint, {
      method: "DELETE",
      headers: {
        ...BASE_HTTP_HEADER,
        ...headers,
      },
    });
  }
}
