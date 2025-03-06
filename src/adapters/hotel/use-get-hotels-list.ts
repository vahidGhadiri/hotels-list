import { useQuery } from "@tanstack/react-query";

import type { HotelData, HotelsSearchQuery } from "@use-cases/hotel";
import hotelUseCase from "@use-cases/hotel";

const useGetHotelsList = (
  query: HotelsSearchQuery,
  options?: AdapterOptionType<HotelData[]>
) =>
  useQuery<HotelData[], ErrorResponse>({
    queryFn: () => hotelUseCase().getHotelsList(query),
    queryKey: ["HOTELS_LIST", query],
    ...options,
  });

export default useGetHotelsList;
