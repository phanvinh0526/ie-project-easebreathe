import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-goodcontrol',
  templateUrl: './goodcontrol.component.html',
  styleUrls: ['./goodcontrol.component.css']
})
export class GoodcontrolComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#goodcontrol-slider").owlCarousel({
      items: 8,
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
