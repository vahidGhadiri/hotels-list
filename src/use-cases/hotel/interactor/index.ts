import type { IHotelRepository } from "../repository";
import type { HotelData } from "../entities";


export interface IHotelInteractor {
    getHotelsList: () => Promise<HotelData[]>
    getHotelDetail: () => Promise<HotelData>
}

export default class HotelInteractor implements IHotelInteractor {
    private HotelRepository: IHotelRepository

    constructor(HotelRepository: IHotelRepository) {
        this.HotelRepository = HotelRepository
    }

    getHotelsList: IHotelInteractor["getHotelsList"] = () => {
        return this.HotelRepository.getHotelsList()
    }

    getHotelDetail: IHotelInteractor["getHotelDetail"] = () => {
        return this.HotelRepository.getHotelDetail()
    }
}
