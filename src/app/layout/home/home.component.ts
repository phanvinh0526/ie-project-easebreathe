import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'; 


declare var $:any;
declare var Typewriter:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private fragment: string;

  bgVideoSrc: string;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.bgVideoSrc = 'assets/video/video-slide.mp4';


    /*----- Type Writter Effect -----*/
    if ($("#typewriting").length) {
      let app = document.getElementById("typewriting");
      let typewriter = new Typewriter(app, {
        loop: true
      });
      typewriter.typeString('Asthma attack first aid').pauseFor(1000).deleteAll()
        .typeString('Physical activities for asthmatics').pauseFor(1000).deleteAll()
        .typeString('Asthma prevention').pauseFor(1000).deleteAll()
        .typeString('Asthma consultation').pauseFor(1000).deleteAll()
        .typeString('Asthma blogs').start();
    }

    // href routing
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });


  }

  ngAfterViewInit(): void {
    try {

      // console.log("HERE: AfterViewInit", this.fragment);

      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
