import { Component, OnInit } from '@angular/core';


declare var $:any;
declare var Typewriter:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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



  }

}
