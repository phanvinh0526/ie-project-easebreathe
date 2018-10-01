import { Component, OnInit } from '@angular/core';

// Pojos
import { WeatherObj } from '../../shared/weather-obj';
// import { WeatherForecaseObj } from '../shared/api-weather-obj';

// Services
import { WeatherApiService } from '../../services/weather-api.service';
import { ServerApiService  } from '../../services/server-api.service';


import { MAP_OPTION } from '../../shared/map-options';


// -- Global Variable -- //
declare const google: any;
declare var $: any;



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  // Variables
  weatherObj: WeatherObj;
  map: any;
  autocomplete: any;
  place: any;
  infowindow: any;
  marker: any;
  infowindowContent: any;
  weekday = new Array(7);
  icon_trans: object;
  showMapOverLay: boolean;
  MapOverLayClass: string;


  constructor(private weatherApiService: WeatherApiService,
            private serverApisService: ServerApiService) { }

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

    this.showMapOverLay = false;

    // Draw a map
    this._drawGMap();

    this._autocomplete();

    // this._showConfig();

    // console.log("CWO", this.weatherObj);
  }


  // --------------------------------------------------------
  _autocomplete(): void {
      let card = document.getElementById('pac-card');
      let input = document.getElementById('pac-input');
      // let types = document.getElementById('type-selector');
      // let strictBounds = document.getElementById('strict-bounds-selector');

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

      // Set infowindow new custom design
      // this.infowindowContent = document.getElementById('infowindow-content');
      // this.infowindow.setContent(this.infowindowContent);

      // Melbourn City as a default value : "2145234"
      // this.infowindow.setContent(this._prepareInfoWindowContent(2145234));

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

  _getGoogleApiData(wObj: any): any{

      // console.log("WeaObj: ", wObj);
      // console.log("PC: ",this.weatherObj.list);
      // console.log("PC: ",this.weatherObj.list.length);


      wObj.address = '';
          if (this.place.address_components) {
            this.weatherObj.address = [
              (this.place.address_components[0] && this.place.address_components[0].short_name || ''),
              (this.place.address_components[1] && this.place.address_components[1].short_name || ''),
              (this.place.address_components[2] && this.place.address_components[2].short_name || '')
            ].join(' ');
          }
      return wObj;
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
        (data: WeatherObj) => {
          // console.log("Data: ", data);
          this.weatherObj = { ...data };
          // console.log("_getForecastConfig NEW: ", this.weatherObj);
        }
      ).then(
          () => {
              this._getGoogleApiData(this.weatherObj);
          }
      ).then(
          () => {
              // -- Update Content of Info-Window -- //
              this.infowindow.setContent(this._prepareInfoWindowContent());
              this.infowindow.open(this.map, this.marker);

              // console.log("FINAL: ", this.weatherObj);
          }
      ).then(
          () => {
              // -- Update Content of Left Weather Bar -- //
              // console.log("Weather: ", this.weatherObj);

              // this.showMapOverLay = true;

              this.MapOverLayClass = this.icon_trans[this.weatherObj.list[0].weather[0].icon] + " material-icons icon-large-font";



              // this.icon_trans[this.weatherObj.list[0].weather[0].icon]

          }
      );
      console.log('I will not wait until subscribe is executed..');
      /**
       *  Subscribe: Once subscribed, “subscribe” callback shall be executed 
       * whenever there is a new data produced by “Observer”
       *  Promise: promise’s “then()” callback handler shall be executed at max once
       */


          // (data: WeatherObj) => this.weatherObj = {
          //         cod: data['cod'],
          //         message: data['message'],
          //         list: data['list'],
          //         city: data['city']
          // }
  }

  test_func(): any{
      let v = 'ABC Testing';
      return v;
  }

  _prepareInfoWindowContent(): any{

      if(this.weatherObj === undefined){
          return '';
      }

      // console.log(data);
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

  _getWeekDay(dt: any): string {
      let d = new Date(dt * 1000);

      // console.log("GetWeekDay: ", d);
      // console.log("GetWeekDay: ", this.weekday[d.getDay()]);

      return this.weekday[d.getDay()];     
  }

  _drawGMap(): void{
      var myLatlng = new google.maps.LatLng(-37.8136, 144.9631);
      var mapOptions = {
          zoom: 12,
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
      
      this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // var marker = new google.maps.Marker({
      //     position: myLatlng,
      //     title: "Hello World!"
      // });

      // To add the marker to the map, call setMap();
      // marker.setMap(map);
  }

}
