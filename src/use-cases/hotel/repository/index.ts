import { IHttp } from "@infrastructure";

import type { HotelServices, HotelsSearchQuery } from "../domain-services";
import { HotelData } from "../entities";

export interface IHotelRepository {
  getHotelsList: (params: HotelsSearchQuery) => Promise<HotelData[]>;
  getHotelDetail: () => Promise<HotelData>;
}

export class HotelRepository implements IHotelRepository {
  private http: IHttp<HotelServices>;

  constructor(http: IHttp<HotelServices>) {
    this.http = http;
  }

  getHotelsList: IHotelRepository["getHotelsList"] = async (query) => {
    console.log("searchQuery", query);
    return this.http.request({
      serviceName: "getHotelsList",
      method: "GET",
      query,
    });
  };

  getHotelDetail: IHotelRepository["getHotelDetail"] = () => {
    return this.http.request({
      serviceName: "getHotelDetail",
      method: "GET",
    });
  };
}
