export type Location = {
  province: string;
  city: string;
  long: number;
  lat: number;
};
export type User = {
  userId: string;
  name: string;
  avatar: string;
};

export type Review = {
  comment: string;
  rating: number;
  date: string;
  id: number;
  user: User;
};

export type HotelData = {
  description: string;
  location: Location;
  reviews: Review[];
  price: number;
  stars: number;
  image: string;
  name: string;
  id: number;
};
