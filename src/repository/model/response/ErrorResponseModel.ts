export interface ErrorResponseModel {
  message: string;
  errors?: { type: string; msg: string }[];
}
