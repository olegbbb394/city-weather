import axios from "axios";
import {IWeatherItem} from "'@'/models/weather.model";

export const getWeatherById = async (id: number): Promise<IWeatherItem | null> => {

    const param = {
        "key": "https://api.openweathermap.org/data/2.5/",
        "appid": "1978d5cd2ed3658747a2c546f5ef164e"
    }

    const url = `${param.key}weather?id=${id}&units=metric&APPID=${param.appid}`;

    try {
        const {data} = await axios.get<IWeatherItem>(url);
        return data;

    } catch (error) {
        return null;
    }
};
