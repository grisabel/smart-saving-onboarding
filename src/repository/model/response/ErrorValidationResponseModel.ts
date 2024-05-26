export interface ErrorValidationResponseModel {
  message: "Validación incorrecta";
  errors: Array<{
    type: string;
    value: string;
    msg: string;
  }>;
}
