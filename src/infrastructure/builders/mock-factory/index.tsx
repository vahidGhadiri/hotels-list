import { MockedHotelsList } from "./db";


export default class MockResponseFactory {
    private mockDataPaths: Record<string, unknown> = {
        "/hotels": MockedHotelsList,
    };

    async getMockResponse(url: string) {
        const filePath = Object.keys(this.mockDataPaths).find(path => url.includes(path));
        if (!filePath) {
            return { message: "MOCKED_RESPONSE" };
        }
        return this.mockDataPaths[filePath];
    }
}
