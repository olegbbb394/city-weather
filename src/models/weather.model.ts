export interface IWeatherItem {
    base: string;

    id: number;

    main: IMain;

    name: string;

    sys: ISys;
    timezone: number;
    visibility: number;
    weather: IWeather[];
    wind: IWind;
}

export interface IMain {
    feels_like: number;

    grnd_level: number;

    humidity: number;

    pressure: number;

    sea_level: number;

    temp: number;

    temp_max: number;

    temp_min: number;
}

export interface ISys {
    country: string;

    sunrise: number;

    sunset: number;
}

export interface IWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface IWind {
    deg: number;
    gust: number;
    speed: number;
}
