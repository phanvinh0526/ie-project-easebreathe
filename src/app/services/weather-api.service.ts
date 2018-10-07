import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Pojo
import { WeatherObj } from '../shared/weather-obj';
// import { WeatherForecaseObj } from '../shared/api-weather-obj';



const CURRENT_WEATHER_PATH = 'http://api.openweathermap.org/data/2.5/weather?';
const FORECAST_WEATHER_PATH = 'http://api.openweathermap.org/data/2.5/forecast?';
const APPID_KEY = 'appid=f6e6db01a6f3d71b4dc4a4b08b5bbf9e';
const POLLEN_DATA = 'assets/data/mel_clean_alltrees.csv'; // vic_clean_alltrees.csv
const SUBURB_GEOJSON = 'assets/data/new_mel_geotest.js'; // new_mel_lga_geofinal.js // new_mel_geotest



@Injectable()
export class WeatherApiService implements OnInit{

  weatherObj: WeatherObj;
  handleError: any;

  // -- functions -- //
  constructor(private http: HttpClient) { }

  ngOnInit(){

  }

  // get default / testing api string
  _getConfig_default(data: any) {
    let configUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=1819730&appid=f6e6db01a6f3d71b4dc4a4b08b5bbf9e';
    return this.http.get<WeatherObj>(configUrl);
  }


  _getForecastConfig(cityId: number): any{
    let url = FORECAST_WEATHER_PATH + 'id=' + cityId + '&' + APPID_KEY;

    console.log('_getForecastConfig URL: ', url);

    return this.http.get<WeatherObj>(url);
  }
  
  _getPollenData(): any{
    // console.log('weatherApiService getPollenData');

    return this.http.get(POLLEN_DATA, {responseType: 'text'});
  }

  _getSuburbGeoJson_tmp(): any{
    // console.log("Get GeoJson: ");
    return this.http.get(SUBURB_GEOJSON, {responseType: 'json'});
  }
  


  



}
