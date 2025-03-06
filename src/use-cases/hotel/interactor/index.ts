import type { HotelDetailParams, HotelsSearchQuery } from "../domain-services";
import type { IHotelRepository } from "../repository";
import type { HotelData } from "../entities";

export interface IHotelInteractor {
  getHotelsList: (query: HotelsSearchQuery) => Promise<HotelData[]>;
  getHotelDetail: (params: HotelDetailParams) => Promise<HotelData>;
}

export default class HotelInteractor implements IHotelInteractor {
  private HotelRepository: IHotelRepository;

  constructor(HotelRepository: IHotelRepository) {
    this.HotelRepository = HotelRepository;
  }

  getHotelsList: IHotelInteractor["getHotelsList"] = (query) => {
    console.log("searchQuery", query);
    return this.HotelRepository.getHotelsList(query);
  };

  getHotelDetail: IHotelInteractor["getHotelDetail"] = (params) => {
    return this.HotelRepository.getHotelDetail(params);
  };
}
