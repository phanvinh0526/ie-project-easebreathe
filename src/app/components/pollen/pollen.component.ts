import { Component, OnInit } from '@angular/core';

import { WeatherApiService } from '../../services/weather-api.service';

//-- Data
import { MAP_OPTION } from '../../shared/map-options';
import { PollenObject } from '../../shared/weather-obj';
// import { NEWGEOFINAL } from '../../../assets/data/new_mel_geofinal.js'

//-- Global Variable
declare const google: any;
declare var $: any;



@Component({
  selector: 'app-pollen',
  templateUrl: './pollen.component.html',
  styleUrls: ['./pollen.component.css']
})
export class PollenComponent implements OnInit {

  //-- Local variables
  heatmap: any;
  heatmap_layer: any;
  pollenData = new Array<PollenObject>();
  pollenGeo =  new Array<Object>();
  suburbGeo: any;


  constructor(private weatherApiService: WeatherApiService) { }

  ngOnInit() {

    // first, load data only 1 single time, draw map, then dra heatmap layer
    // this._fullloadPollenData();

    this._drawSuburbGeoJson();
  }
  


  _fullloadPollenData(): void{
    this.weatherApiService._getPollenData().toPromise()
      .then(
        (data: any) => {
          // Data Prep
          data = data.split(/\r\n|\n/);
          let tmp;

          // Skip column names
          for(let i=1; i < data.length; i++){
            tmp = data[i].split(',');
            let pollenObj = new PollenObject();
            pollenObj.crown = Number(tmp[0]);
            pollenObj.lat = Number(tmp[1]);
            pollenObj.lon = Number(tmp[2]);
            pollenObj.source = String(tmp[3]);

            this.pollenData.push(pollenObj);
          }
          // console.log(this.pollenData);
        }
      )
      .then(
        () => {
          // Draw heat map
          this._drawMap();
        }
      )
      .then(
        () => {
          // Draw suburb geojson layer
          this._drawSuburbGeoJson();
        }
      )
      .then(
        () => {
          // Draw heat map layer on top of Google Map
          console.log("Draw heatmap");
          this._drawHeatMap_Layer();
        }
      );

  }

  _drawMap(): void{
    var myLatlng = new google.maps.LatLng(-37.8136, 144.9631);
    var mapOptions = {
        zoom: 10,
        center: myLatlng,
      //   scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        mapTypeControl: false,
        scaleControl: true,
        zoomControl: true,
        streetViewControl: false, 
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        fullscreenControl: false,
        styles: MAP_OPTION['night']
    };
    
    this.heatmap = new google.maps.Map(document.getElementById("heatmap"), mapOptions);
  }

  
  // -- Load Suburb GeoJson
  _drawSuburbGeoJson(): void {
    this.weatherApiService._getSuburbGeoJson_tmp().toPromise()
      .then(
        (data: any) => {
          console.log("fullLoad GeoJson");
          console.log(data);
          this.suburbGeo = data;
        }
      )
      .then(
        () => {
          this._drawMap();
        }
      )
      .then(
        () => {
          this.heatmap.data.addGeoJson(this.suburbGeo, {idPropertyName:"id"});
          let setColorStyleFn = {
            fillColor: '#d3ffd3',
            fillOpacity: 0.3,
            strokeWeight: 1,
            strokeColor: '#ffffff',
            strokeOpacity: 0.8
          }
          this.heatmap.data.setStyle(setColorStyleFn);
        }
      );

  }

  // -- Draw Multi Polygon Suburbs
  // _drawPolygon_Layer(): void{
  //   this.heatmap_layer = new google.maps.visualization.HeatmapLayer({
  //       data: this._getPoints(),
  //       map: this.heatmap,
  //       radius: 40

  //   });
  // }


  //-- Google Map requires Visualisation library extension
  _drawHeatMap_Layer(): void{

    console.log("Drawing heatmap");

    this.heatmap_layer = new google.maps.visualization.HeatmapLayer({
        data: this._getPoints(),
        map: this.heatmap,
        radius: 40,
        opacity: 0.8

    });
  }

  // Heatmap data: 500 Points
  _getPoints(): any {

    // console.log("In _getPoints");

    for(let i=0; i < this.pollenData.length; i++){
      let obj = this.pollenData[i];

      // console.log("Obj lat: ", obj.lat, " ; ", obj.lon);
      if(!isNaN(obj.lat) && !isNaN(obj.lon)){
        let geo = new google.maps.LatLng(obj.lat, obj.lon);
        // console.log("Lat: ", geo.lat(), " lon: ", geo.lng());

        this.pollenGeo.push(geo);
      }
    }
    // console.log("PollenGeo: ", this.pollenGeo);
    
    return this.pollenGeo;
  }
    
  _toggleHeatmap(): void {
    this.heatmap._layer.setMap(this.heatmap_layer.getMap() ? null : this.heatmap);

  }

  _changeRadius(): void {

    // this.heatmap_layer.set('radius', 10);

    // this.heatmap._layer.set('radius', this.heatmap._layer.get('radius') ? null : 20);

  }

  _changeOpacity(): void {
    this.heatmap._layer.set('opacity', this.heatmap._layer.get('opacity') ? null : 0.2);

  }

}
