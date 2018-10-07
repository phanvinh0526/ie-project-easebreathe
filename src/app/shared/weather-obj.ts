
export class TreeCount{
    lga: string;
    count: number;
}

export class PollenObject{
    // gid, crown, lat, lon
    crown: number;
    lat: number;
    lon: number;
    source: string;
}

export interface CityObj{
    id: number;
    name: string;
    coord: object;
    country: string;
}

export interface Temp{
    temp: number;
    temp_min: number;
    temp_max: number;
    // pressure: number;
    // sea_level: number;
    // grnd_level: number;
    humidity: number;
    // temp_kf: number;
}

export interface Weather{
    main: string;
    description: string;
    icon: string;
}

export interface Weather3Hour{
    dt: number;
    main: Temp;
    weather: Weather[];
    clouds: object;
    wind: object;
    rain: object;
    // sys: object;
    dt_txt: string; // need convert to DateTime
}

export interface WeatherObj{
    cod: string;
    message: number;
    cnt: number;
    list: Weather3Hour[];
    // list: object[];
    city: object[];
    address: string;
}

export interface WeatherForecaseObj{
    coord: object;
    weather: object;
    base: string;
    main: object;
    wind: object;
    cloud: object;
    dt: number;
    sys: object;
    id: number;
    name: string;
    code: number;
    address: string;
}