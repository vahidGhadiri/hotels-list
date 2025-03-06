import { useQuery } from "@tanstack/react-query";

import type { HotelData, HotelDetailParams } from "@use-cases/hotel";
import hotelUseCase from "@use-cases/hotel";

const useGetHotelDetail = (
  params: HotelDetailParams,
  options?: AdapterOptionType<HotelData>
) =>
  useQuery<HotelData, ErrorResponse>({
    queryFn: () => hotelUseCase().getHotelDetail({ id: params.id }),
    queryKey: ["HOTELS_LIST", params.id],
    ...options,
  });

export default useGetHotelDetail;
