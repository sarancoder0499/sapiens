export type ValidationType = {
  property: string;
  constraints: Record<string, string>;
};

export type ValidationErrorType = {
  message: ValidationType[];
  error: string;
  statusCode: number;
};
