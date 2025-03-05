import { Http } from "@/infrastructure/http"

import type { HotelServices } from "./domain-services"
import { hotelServices } from "./domain-services"
import { HotelRepository } from "./repository"
import HotelInteractor from "./interactor"


export * from "./domain-services"
export * from "./entities"

export default function hotelUseCase() {
    const http = new Http<HotelServices>(hotelServices)
    const hotelRepository = new HotelRepository(http)
    const hotelInteractor = new HotelInteractor(hotelRepository)
    return hotelInteractor
}