export interface HotelsSearchQuery {
  description_like?: string;
  name_like?: string;
}

export interface HotelDetailParams {
  id: string;
}

export const hotelServices = {
  getHotelsList: "hotels",
  getHotelDetail: "hotels/:id",
};

export type HotelServices = typeof hotelServices;
