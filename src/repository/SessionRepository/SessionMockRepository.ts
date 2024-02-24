import { HttpMockAdapterFactory } from "@/utils/Http/HttpMockAdapterFactory";
import { SessionHttpRepository } from "./SessionHttpRepository";

const mockHttp = HttpMockAdapterFactory.getInstance();

mockHttp.onPost(
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/session/login",
  () => {
    return Promise.resolve({
      response: {
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InNtYXJ0LXNhdmluZy1hcGkiLCJpYXQiOjE3MDg3NzI0ODUsImV4cCI6MTcwODc3MzM4NSwic3ViIjoiaXNhYmVsY2hlbGUyNkBnbWFpbC5jb20ifQ.XQum10GFp8cVz4WnTy4AWRfI9vHBuTWByuSbLyYGMsI",
        refreshToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDg3NzI0ODUsImV4cCI6MTcwODg1ODg4NSwic3ViIjoiaXNhYmVsY2hlbGUyNkBnbWFpbC5jb20ifQ.vzXhtsT20J6e4ODC8vELXqzSKap-lfNotrNBqfRXxiQ",
        token_type: "bearer",
        expires: 1708773385,
      },
      status: 200,
    });
  }
);

export class SessionMockRepository extends SessionHttpRepository {}
