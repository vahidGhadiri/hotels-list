declare global {
  type ErrorResponse = {
    httpStatusCode: string;
    status?: number;
    message: string;
  };

  type QueryValueType = string | number | boolean;

  type Query = Record<string, QueryValueType> | undefined;

  type PathParams = Record<string, string | number> | undefined;

  type AdapterOptionType<ResponseType, T = ResponseType> = Omit<
    UseQueryOptions<ResponseType, ErrorResponse, T>,
    "queryKey" | "queryFn"
  >;
}

export { };


export type Sample {
  sample: any
}
