import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WeatherApiService } from './weather-api.service';

//-- Data
import { MAP_OPTION } from '../shared/map-options';
import { PollenObject } from '../shared/weather-obj';

//-- Global Variable
declare const google: any;
// declare var $: any;

const POLLEN_DATA = 'assets/data/mel_clean_alltrees.csv'; // vic_clean_alltrees.csv
const SUBURB_GEOJSON = 'assets/data/new_mel_lga_geofinal.js'; // new_mel_lga_geofinal.js // new_mel_geotest
const LGA_TREE_COUNT ='assets/data/lga_num_tree_count.csv';

@Injectable({
  providedIn: 'root'
})
export class PollenApiService {

  //-- Local variables
  // heatmap: any;
  heatmap_layer: any;
  pollenData = new Array<PollenObject>();
  pollenGeo =  new Array<Object>();
  suburbGeo: any;
  lga_layer: any;


  constructor(private weatherApiService: WeatherApiService,
    private http: HttpClient) { }



  //-----------------------------------------------------
  //      Functions
  //-----------------------------------------------------

  _getSuburbGeoJson(): any{
    return this.http.get(SUBURB_GEOJSON, {responseType: 'json'});
  }

  _getLGATreeCount(): any{
    return this.http.get(LGA_TREE_COUNT, {responseType: 'text'});
  }

  // _fullloadPollenData(): void{
    // this.weatherApiService._getPollenData().toPromise()
    //   .then(
    //     (data: any) => {
    //       // Data Prep
    //       data = data.split(/\r\n|\n/);
    //       let tmp;

    //       // Skip column names
    //       for(let i=1; i < data.length; i++){
    //         tmp = data[i].split(',');
    //         let pollenObj = new PollenObject();
    //         pollenObj.crown = Number(tmp[0]);
    //         pollenObj.lat = Number(tmp[1]);
    //         pollenObj.lon = Number(tmp[2]);
    //         pollenObj.source = String(tmp[3]);

    //         this.pollenData.push(pollenObj);
    //       }
    //       // console.log(this.pollenData);
    //     }
    //   )
    //   .then(
    //     () => {
    //       // Draw heat map
    //       this._drawMap();
    //     }
    //   )
    //   .then(
    //     () => {
    //       // Draw suburb geojson layer
    //       this._drawSuburbGeoJson();
    //     }
    //   )
    //   .then(
    //     () => {
    //       // Draw heat map layer on top of Google Map
    //       console.log("Draw heatmap");
    //       this._drawHeatMap_Layer();
    //     }
    //   );
  // }

  // _drawMap(): void{
    // var myLatlng = new google.maps.LatLng(-37.8136, 144.9631);
    // var mapOptions = {
    //     zoom: 10,
    //     center: myLatlng,
    //   //   scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    //     mapTypeControl: false,
    //     scaleControl: true,
    //     zoomControl: true,
    //     streetViewControl: false, 
    //     zoomControlOptions: {
    //         position: google.maps.ControlPosition.LEFT_BOTTOM
    //     },
    //     fullscreenControl: false,
    //     styles: MAP_OPTION['night']
    // };
    // this.heatmap = new google.maps.Map(document.getElementById("heatmap"), mapOptions);
  // }

  
  //-- Load Suburb GeoJson
 
  // _drawSuburbGeoJson(infoWindow: any):  any{
    // this.weatherApiService._getSuburbGeoJson().toPromise()
    //   .then(
    //     (data: any) => {
    //       // console.log("fullLoad GeoJson : ", data);
    //       this.suburbGeo = data;
    //     }
    //   )
    //   .then(
    //     () => {
          
    //       this.lga_layer = new google.maps.Data();

    //       this.lga_layer.loadGeoJson(this.suburbGeo);
    //       // MAP.data.addGeoJson(this.suburbGeo);
          
    //       // LGA_LAYER.setStyle( (feature: any) => {

    //       //   console.log("In setStyles: ", this._getColor(feature.getProperty('trees')));

    //       //   this._getPolygonStyle(feature);
    //       // })

    //       this.lga_layer.setStyle(function(feature){
    //         console.log("In setStyles: ", this._getColor(feature.getProperty('trees')));
    //         return {
    //           fillColor: this._getColor(feature.getProperty('trees')),
    //           fillOpacity: 0.3,
    //           strokeWeight: 1,
    //           strokeColor: '#ffffff',
    //           strokeOpacity: 0.8,
    //           zIndex: 1
    //         };
    //       })

    //       console.log("loadGeoJson successfully: ", this.suburbGeo);

    //       console.log("LGA_Layer in: ", this.lga_layer);

    //       // MAP.addListener('mouseover', (evt: any) => {
    //       //   this._addMouseoverEvent(evt, MAP);
    //       // });

    //       // MAP.addListener('mouseout', (evt: any) => {
    //       //   this._addMouseoutEvent(evt, MAP);
    //       // });

    //       // MAP.addListener('click', (evt: any) => {
    //       //   this._addMouseclickEvent(evt, MAP, infoWindow);
    //       // });
    //     }
    //   );

    //   return this.lga_layer;
  // }


  _getPolygonStyle(feature: any): any{
    // console.log("IN polygon style");
    // Boundaries for LGA
    let setColorStyleFn = {
      // fillColor: this._getColor(feature.getProperty('trees')),
      fillColor: 'red',
      fillOpacity: 0.3,
      strokeWeight: 1,
      strokeColor: '#ffffff',
      strokeOpacity: 0.8,
      zIndex: 1
    }
    console.log("Color: ", setColorStyleFn);
    return setColorStyleFn;
  }

  


  //-- Google Map requires Visualisation library extension
  // _drawHeatMap_Layer(MAP: any): void{
  //   // console.log("Drawing heatmap");
  //   this.heatmap_layer = new google.maps.visualization.HeatmapLayer({
  //       data: this._getPoints(),
  //       map: MAP,
  //       radius: 40,
  //       opacity: 0.8

  //   });
  // }

  // Heatmap data: 500 Points
  // _getPoints(): any {
  //   for(let i=0; i < this.pollenData.length; i++){
  //     let obj = this.pollenData[i];
  //     // console.log("Obj lat: ", obj.lat, " ; ", obj.lon);
  //     if(!isNaN(obj.lat) && !isNaN(obj.lon)){
  //       let geo = new google.maps.LatLng(obj.lat, obj.lon);
  //       this.pollenGeo.push(geo);
  //     }
  //   }
  //   return this.pollenGeo;
  // }
    

  // _changeRadius(): void {
  //   this.heatmap_layer.set('radius', 10);
  //   this.heatmap._layer.set('radius', this.heatmap._layer.get('radius') ? null : 20);
  // }

}
