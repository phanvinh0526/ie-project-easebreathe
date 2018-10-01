import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-badcontrol',
  templateUrl: './badcontrol.component.html',
  styleUrls: ['./badcontrol.component.css']
})
export class BadcontrolComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#badcontrol-slider").owlCarousel({
      items: 1,
      margin: 30,
      dots: true,
      nav: true,
      responsive: {
         1280: {
            items: 4,
         },
         600: {
            items: 3,
         },
         320: {
            items: 2,
         },
      }
    });
  
  
  }

}
