export type Location = {
    long: number
    lat: number
}

export type HotelData = {
    id: number
    description: string
    location: Location
    stars: number
}