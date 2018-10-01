import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-partialcontrol',
  templateUrl: './partialcontrol.component.html',
  styleUrls: ['./partialcontrol.component.css']
})
export class PartialcontrolComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#paritalcontrol-slider").owlCarousel({
      items: 4,
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
