/// <reference types="vite/types/importMeta.d.ts" />

export interface BuildUrlParams {
  pathParams?: PathParams;
  serviceEndpoint: string;
  baseUrl?: string;
  query?: Query;
}

export interface IUrlBuilder {
  buildUrl: (args: BuildUrlParams) => string;
}

export default class UrlBuilder implements IUrlBuilder {
  public buildUrl({
    serviceEndpoint,
    pathParams,
    query,
    baseUrl = import.meta.env.VITE_APP_BASE_URL,
  }: BuildUrlParams): string {
    let servicePath = serviceEndpoint;
    let queryParams = "";

    if (pathParams) {
      Object.entries(pathParams).forEach(([key, value]) => {
        servicePath = servicePath.replace(
          `:${key}`,
          encodeURIComponent(String(value))
        );
      });
    }

    if (query) {
      if (typeof query === "string") {
        queryParams = `?${query}`;
      } else if (typeof query === "object" && query !== null) {
        const stringifiedQuery = Object.entries(query).reduce(
          (acc, [key, value]) => {
            if (value !== undefined && value !== "") {
              acc[key] = String(value);
            }
            return acc;
          },
          {} as Record<string, string>
        );

        if (Object.keys(stringifiedQuery).length > 0) {
          queryParams = `?${new URLSearchParams(stringifiedQuery).toString()}`;
        }
      }
    }

    return new URL(`${baseUrl}/${servicePath}${queryParams}`).toString();
  }
}
