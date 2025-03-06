export type Location = {
  province: string;
  city: string;
  long: number;
  lat: number;
};

export type HotelData = {
  description: string;
  location: Location;
  price: number;
  stars: number;
  image: string;
  name: string;
  id: number;
};
