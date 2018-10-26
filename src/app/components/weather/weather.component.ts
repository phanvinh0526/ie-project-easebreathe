import { Component, OnInit } from '@angular/core';

// Pojos
import { WeatherObj, TreeCount } from '../../shared/weather-obj';
// import { WeatherForecaseObj } from '../shared/api-weather-obj';

// Services
import { WeatherApiService } from '../../services/weather-api.service';
import { ServerApiService  } from '../../services/server-api.service';
import { PollenApiService } from '../../services/pollen-api.service';

import { MAP_OPTION } from '../../shared/map-options';


// -- Global Variable -- //
declare const google: any;
declare const $: any;
declare const chroma: any;


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  // Variables
  weatherObj: WeatherObj;
  selectedIdx: number;
  map: any;
  lga_layer: any;
  autocomplete: any;
  place: any;
  infowindow: any;
  marker: any;
  infowindowContent: any;
  weekday = new Array(7);
  icon_trans: object;
  showMapOverLay: boolean;
  MapOverLayClass: string;
  lga_color: any;
  lga_tree_count = new Array<TreeCount>();

  constructor(private weatherApiService: WeatherApiService,
            private serverApisService: ServerApiService,
            private pollenApiService: PollenApiService) { }

  ngOnInit() {

    // Prepare data
    this.weekday[0] = "SUN";
    this.weekday[1] = "MON";
    this.weekday[2] = "TUE";
    this.weekday[3] = "WED";
    this.weekday[4] = "THU";
    this.weekday[5] = "FRI";
    this.weekday[6] = "SAT";

    // Icon Transform
    this.icon_trans = {
        '01d': 'flaticon-014-sun-2', '01n': 'flaticon-014-sun-2',
        '02d': 'flaticon-021-cloudy-1', '02n': 'flaticon-021-cloudy-1',
        '03d':	'flaticon-010-cloud', '03n': 'flaticon-010-cloud',
        '04d': 'flaticon-010-cloud', '04n': 'flaticon-010-cloud',
        '09d': 'flaticon-003-rain', '09n': 'flaticon-003-rain',
        '10d': 'flaticon-004-rain-1', '10n': 'flaticon-004-rain-1',
        '11d': 'flaticon-007-storm-1', '11n': 'flaticon-007-storm-1',
        '13d': 'flaticon-011-snow', '13n': 'flaticon-011-snow',
        '50d': 'flaticon-036-wind-1', '50n': 'flaticon-036-wind-1'
    }

    // Set color domain
    this.lga_color = chroma.scale(['#0f0', '#f00']).domain([3.2 , 4.7]); // mycolor_LGA(Math.log10(grades[i]))

    // Hide sidebar
    this.showMapOverLay = false;

    // Draw a map
    this._drawGMap();

    this._autocomplete();

  }


  // --------------------------------------------------------
  _autocomplete(): void {
      let card = document.getElementById('pac-card');
      let input = document.getElementById('pac-input');

      this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
      this.autocomplete = new google.maps.places.Autocomplete(input);

      // Bind the map's bounds (viewport) property to the autocomplete object,
      // so that the autocomplete requests use the current map bounds for the
      // bounds option in the request.
      this.autocomplete.bindTo('bounds', this.map);

      // Set the data fields to return when the user selects a place.
      this.autocomplete.setFields(
          ['address_components', 'geometry', 'icon', 'name']);

      this.infowindow = new google.maps.InfoWindow();

      //  ----------------------------------------------------------------------

      this.marker = new google.maps.Marker({
        map: this.map,
        anchorPoint: new google.maps.Point(0, -29)
      });

      // listen "place_changed" in Autocomplete input box
      this._listen_autocomplete_place_changed();

      // listen "click" marker on Map
      this._listen_autocomplete_marker();

  }

  _callWeatherAPI(tPlace: any): void{
        // As default, we select element [1] - long-name removed 'city' as the keyword to query cityId
        let cityName = tPlace.address_components[1].long_name.replace('City', '');
        let cityId = this.serverApisService._getCityId_by_Name(cityName);

        // ----------------------------------------------------------------
        // Subscribe WeatherObj and update its value to weatherObj variable
        // console.log("cityID type @ WeatherAPIService: ", cityId);

        this.weatherApiService._getForecastConfig(cityId).toPromise()
        .then(

    // First, get data from Weather API
        (data: WeatherObj) => {
            // console.log("Data: ", data);
            this.weatherObj = { ...data };
            // console.log("_getForecastConfig NEW: ", this.weatherObj);
        }
        ).then(
            () => {
    // Second, add google map api data (suburb, lga, address)
                this._getGoogleApiData();
            }
        ).then(
            () => {
    // Thirds, update Content of Info-Window
                // this.infowindow.setContent(this._prepareInfoWindowContent());
                // this.infowindow.open(this.map, this.marker);
                
            }
        ).then(
            () => {
    //  Fourth, update Content of Left Weather Bar
                this.showMapOverLay = true;
                this._prepareSidebarContent(0); // default get 1 item


            }
        );
    }


  _listen_autocomplete_marker(): void{
      this.marker.addListener('click', () => {
          this.infowindow.open(this.map, this.marker);
      });
  }

  _listen_autocomplete_place_changed(): void{
      // Add listener to place_changed
      this.autocomplete.addListener('place_changed', () => {

          // Close all components on the Map
          this.infowindow.close(); 
          this.marker.setVisible(false);
          this.place = this.autocomplete.getPlace();

          // Testing
          // console.log("places", this.place);

          // --   Search for Weather CityID -- //
          this._callWeatherAPI(this.place);

          // ------------------------
          if (!this.place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + this.place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (this.place.geometry.viewport) {
            this.map.fitBounds(this.place.geometry.viewport);
          } else {
            this.map.setCenter(this.place.geometry.location);
            this.map.setZoom(15);  // Why 17? Because it looks good.
          }
        
            // google.maps.LatLng(-37.8136, 144.9631);
        //   let newLoc = new google.maps.LatLng(this.place.geometry.location.lat(), 
        //                         this.place.geometry.location.lon() - 0.001);
          this.marker.setPosition(this.place.geometry.location);
          this.marker.setVisible(true);

          // Call : _asyncAfterCallWeatherAPI

      });
  }

  _getGoogleApiData(): any{

    //   console.log("WeaObj: ", wObj);
    //   console.log("PC: ",this.weatherObj.list);
    // console.log("PC: ",this.weatherObj.list.length);

        this.weatherObj.address = '';
          if (this.place.address_components) {
            this.weatherObj.address = [
              (this.place.address_components[0] && this.place.address_components[0].short_name || ''),
              (this.place.address_components[1] && this.place.address_components[1].short_name || ''),
              (this.place.address_components[2] && this.place.address_components[2].short_name || '')
            ].join(' ');
          }
  }


  test_func(): any{
      let v = 'ABC Testing';
      return v;
  }

  _prepareSidebarContent(idx: number): any{
    if(this.weatherObj === undefined){
        return '';
    }
    
    this.selectedIdx = idx;

    console.log("PC: ",this.weatherObj.list.length);
    console.log(this.weatherObj);

  }

  _prepareInfoWindowContent(): any{

      if(this.weatherObj === undefined){
          return '';
      }

      // console.log(this.weatherObj.list);
      // console.log(this.weatherObj.list.length);

      let length = this.weatherObj.list.length;
      let htmlContent = '';

      htmlContent +=
              '<div class="col-md-12 info-window" style="color: black" id="infowindow-content">' +
                  '<div class="row font-medium" style="margin-left: 10px; height: 30px">' +
                  '<h5 class="card-title font-medium text-primary-custom" style="color: #9c27b0" id="place-address">'+ this.weatherObj.address +'</h5> <hr>' +
                  '</div>' +
              '<div class="row text-center font-small small-padding small-margin" style="height: 130px; width: 500px;">';
      
      // Current Day
      htmlContent += 
              '<div class="col-md-4 ">'+
                  '<div class="row" style="margin: auto">'+
                      '<div class="col-md-6 no-padding">'+
                          // '<i class="material-icons icon-medium-font">'+this.weatherObj.list[0].weather[0].icon+'</i>'+
                          '<i class="'+ this.icon_trans[this.weatherObj.list[0].weather[0].icon] +' material-icons icon-medium-font"></i>'+
                      '</div>'+
                      '<div class="col-md-6 text-center no-padding">'+
                          '<h5 class="card-title cus-text-center" style="font-weight: 700;" >'+this.weatherObj.list[0].weather[0].main.toUpperCase()+'</h5>'+
                      '</div>'+
                  '</div>'+
                  '<p class="category" style="margin-bottom: 2px">'+this.weatherObj.list[0].weather[0].description.toLowerCase()+'</p>'+
                  '<p class="category" style="font-weight: 200">Humidity : '+this.weatherObj.list[0].main.humidity+' %</p>'+
              '</div>';

      for(let index = 8; index < length; index+=8){
          htmlContent += 
              '<div class="col-md-2 small-margin">'+
                  '<h5 class="card-title" style="color: crimson; font-weight: 500">'+ this._getWeekDay(this.weatherObj.list[index].dt) +'</h5>'+
                  '<i class="'+ this.icon_trans[this.weatherObj.list[index].weather[0].icon] +' material-icons icon-small-font"></i>'+
                  '<p class="category ">'+ this.weatherObj.list[index].weather[0].main.toUpperCase() +'</p>'+
                  '<p class="category" style="font-weight: 200;text-transform: lowercase;">'+ this.weatherObj.list[index].weather[0].description.toUpperCase() +'</p>'+
              '</div>';
      }    
          
      htmlContent += '</div></div>';

      // console.log("htmlContent: ", htmlContent);

      return htmlContent;
  }

  _getDayHour(dt: any): string{
    let d = new Date(dt * 1000);
    return d.toString();
  }

  _getWeekDay(dt: any): string {
      let d = new Date(dt * 1000);

      // console.log("GetWeekDay: ", d);
      // console.log("GetWeekDay: ", this.weekday[d.getDay()]);

      return this.weekday[d.getDay()];     
  }

  _convertKelvin2Cel(valNum: any): number {
    valNum = parseFloat(valNum);
    // console.log(valNum);
    return Math.round(valNum-273.15);
  }


    _drawGMap(): void {
      var myLatlng = new google.maps.LatLng(-37.8136, 144.9631);
      var mapOptions = {
          zoom: 10,
          center: myLatlng,
        //   scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          mapTypeControl: false,
          scaleControl: true,
          zoomControl: true,
          streetViewControl: false, 
        //   gestureHandling: 'greedy', // shortcut to zoom in out Map
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_BOTTOM
          },
          fullscreenControl: false,
          styles: MAP_OPTION['clean']
      };
      
      this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      

      //    Draw polygon data layer
      this._drawPolygonLayer();

    }


    _drawPolygonLayer(): void {

        //-- Load LGA Tree Count
        this.pollenApiService._getLGATreeCount().toPromise()
            .then(
                (data: any) => {
                    // console.log("Tree Count Before: ", data);
                    data = data.split(/\r\n|\n/);
                    let tmp;
                    for(let i=1; i < data.length; i++){
                        tmp = data[i].split(',');
                        let treeObj = new TreeCount();
                        treeObj.lga = tmp[0];
                        treeObj.count = Number(tmp[1]);
                        this.lga_tree_count.push(treeObj);
                    }
                    // console.log("Tree Count After: ", this.lga_tree_count);
                }
            );

        //-- Load Suburb GeoJson
        this.pollenApiService._getSuburbGeoJson().toPromise()
            .then(
                (geoJson: any) => {
                    this.lga_layer = new google.maps.Data();
                    this.lga_layer.addGeoJson(geoJson);
                    // console.log("After LGALayer: ", this.lga_layer);
                }
            )
            .then(
                () => {
                    this.lga_layer.setStyle(
                        (feature: any) => {
                            let colorVar = this._getColorMaster(feature);
                            // console.log("Returned Color: ", colorVar);
                            return {
                                fillColor: colorVar,
                                fillOpacity: 0.5,
                                strokeWeight: 1,
                                strokeColor: '#ffffff',
                                strokeOpacity: 0.8,
                                zIndex: 1
                            };
                        }
                    );
                }
            )
            .then(
                () => {
                    //--    Add Event Listener on top of Polygons

                    this.lga_layer.addListener('mouseover', (evt: any) => {
                        this._addMouseoverEvent(evt, this.lga_layer);
                        this._addMouseclickEvent(evt, this.map, this.infowindow);
                    });

                    this.lga_layer.addListener('mouseout', (evt: any) => {
                        this._addMouseoutEvent(evt, this.lga_layer);
                    });

                    // this.lga_layer.addListener('click', (evt: any) => {
                    //     this._addMouseclickEvent(evt, this.map, this.infowindow);
                    // });
                }
            )
            .then(
                () => {
                     //-- Set data layer on the Map
                     this.lga_layer.setMap(this.map);
                }
            );
        console.log("Map LGA Layer has been set successfully!!!");
    }


    _getLgaCount(arr: any, key: string){
        let lga = arr.filter(function(row){
            return row['lga'] == key;
        })[0];
        return lga['count'];
    }

    _getColorMaster(feature: any): string{
        // console.log("Length of LGA: ", this.lga_tree_count.length);
        let lga = feature.getProperty('neighbourhood');

        let count = this._getLgaCount(this.lga_tree_count, lga);
        // console.log("LGA Count: ", lga);
        // console.log("LGA Count Value: ", lga.count);
        return this._getColor(count);
    }

    _getColor(fig: any): string {
        // console.log("_getColor in para: ", fig);
        // console.log("in getColor Log10: ", Math.log10(fig));
        return this.lga_color(Math.log10(fig));
    }
    

    _addMouseoverEvent(evt: any, dataLayer: any){
        // Add mouseover and mouse out styling for the GeoJSON State data
        dataLayer.overrideStyle(evt.feature, {
            strokeColor: '#3b4be2',
            strokeWeight: 2,
            zIndex: 2
        });
    }

    _addMouseoutEvent(evt: any, dataLayer: any){
        dataLayer.revertStyle();
    }

    _addMouseclickEvent(evt: any, map:any, infoWindow: any){

        // Get variables
        let lga = evt.feature.getProperty('neighbourhood');
        let count = this._getLgaCount(this.lga_tree_count, lga);

        let str = `
                <h5 class="card-title font-medium text-rose">City : `+ lga + `</h5>
                <h5 class="card-title font-medium text-rose">Number of Trees : `+ count + `<h5>
        `;


        infoWindow.setContent(str);
        // console.log("Info Str: ", str);
        // console.log("LatLon: ", evt.latLng.lat());
        // console.log("Event: ", evt);


        let anchor = new google.maps.MVCObject();
        anchor.set("position", evt.latLng);
        infoWindow.open(this.map, anchor);
    }
}
