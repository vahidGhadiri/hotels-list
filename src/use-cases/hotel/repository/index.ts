import { IHttp } from "@/infrastructure/http"

import { HotelServices } from "../domain-services"
import { HotelData } from "../entities"


export interface IHotelRepository {
    getHotelsList: () => Promise<HotelData[]>
    getHotelDetail: () => Promise<HotelData>
}

export class HotelRepository implements IHotelRepository {
    private http: IHttp<HotelServices>

    constructor(http: IHttp<HotelServices>) {
        this.http = http
    }

    getHotelsList: IHotelRepository['getHotelsList'] = async () => {
        return this.http.request({
            serviceName: "getHotelsList",
            method: "GET",
        })
    }

    getHotelDetail: IHotelRepository["getHotelDetail"] = () => {
        return this.http.request({
            serviceName: "getHotelDetail",
            method: "GET",
        })
    };
}
