import { IHttp } from "@infrastructure"

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
        }, {
            responseBody: {
                description: "1",
                id: 1,
                location: {
                    lat: 1,
                    long: 1,
                },
                stars: 1
            }
        })

    };
}
