import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const SERVER_PATH = 'http://localhost';


@Injectable()
export class ServerApiService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(){
    // Any security token?

  }

  _getCityId_by_Name(cityName: string){
    // let configUrl = SERVER_PATH + '/' + 'dao_search_CityId.php' + '?' + 'cityname=' + cityName;
    // console.log(configUrl);
    // return this.http.get(configUrl)

    // let ran = (Math.floor(Math.random() * 8219813) + 7839396);

    // console.log("RANDOM: ", ran);

    return 2145234;
  }


}
