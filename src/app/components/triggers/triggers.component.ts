import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-triggers',
  templateUrl: './triggers.component.html',
  styleUrls: ['./triggers.component.css']
})
export class TriggersComponent implements OnInit {

  weatherImg: string;

  constructor() { }

  ngOnInit() {

    this.weatherImg = '/assets/images/weather.png';
    

    
    $("#portfolio-measonry").cubeportfolio({
      filters: '#measonry-filters',
      loadMoreAction: 'click',
      layoutMode: 'grid',
      defaultFilter: '*',
      animationType: "scaleSides",
      gapHorizontal: 30,
      gapVertical: 30,
      gridAdjustment: "responsive",
      mediaQueries: [{
         width: 1500,
         cols: 2
          }, {
         width: 1100,
         cols: 2
          }, {
         width: 768,
         cols: 2
          }, {
         width: 480,
         cols: 1
          }, {
         width: 320,
         cols: 1
          }],
    });

  }

}
