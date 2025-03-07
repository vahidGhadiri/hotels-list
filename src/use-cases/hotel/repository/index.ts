import { IHttp } from "@infrastructure";

import type { HotelData } from "../entities";

import type {
  HotelsSearchQuery,
  HotelDetailParams,
  HotelServices,
} from "../domain-services";

export interface IHotelRepository {
  getHotelDetail: (pathParams: HotelDetailParams) => Promise<HotelData>;
  getHotelsList: (query?: HotelsSearchQuery) => Promise<HotelData[]>;
}

export class HotelRepository implements IHotelRepository {
  private http: IHttp<HotelServices>;

  constructor(http: IHttp<HotelServices>) {
    this.http = http;
  }

  getHotelsList: IHotelRepository["getHotelsList"] = async (query) => {
    return this.http.request({
      serviceName: "getHotelsList",
      method: "GET",
      query,
    });
  };

  getHotelDetail: IHotelRepository["getHotelDetail"] = (pathParams) => {
    return this.http.request({
      serviceName: "getHotelDetail",
      method: "GET",
      pathParams,
    });
  };
}
