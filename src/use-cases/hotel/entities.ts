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

export type UserReview = {
  comment: string;
  rating: number;
  date: string;
  id: number;
  user: User;
};

export type HotelData = {
  reviews: UserReview[];
  description: string;
  location: Location;
  price: number;
  stars: number;
  image: string;
  name: string;
  id: number;
};
