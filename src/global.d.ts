declare global {

    type ErrorResponse = {
        httpStatusCode: string
        status?: number
        message: string
    }

    type QueryValueType = string | number | boolean

    type Query = string | Record<string, QueryValueType>

    type PathParams = Record<string, string | number>

    type AdapterOptionType<ResponseType, T = ResponseType> = Omit<
        UseQueryOptions<ResponseType, ErrorResponse, T>,
        'queryKey' | 'queryFn'
    >
};


export { }