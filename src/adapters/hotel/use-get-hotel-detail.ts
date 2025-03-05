import { useQuery } from "@tanstack/react-query"

import type { HotelData } from "@/use-cases/hotel"
import hotelUseCase from "@/use-cases/hotel"

const useGetHotelDetail = (options?: AdapterOptionType<HotelData>) =>
    useQuery<HotelData, ErrorResponse>({
        queryFn: () => hotelUseCase().getHotelDetail(),
        queryKey: ["HOTELS_LIST"],
        ...options
    })


export default useGetHotelDetail
