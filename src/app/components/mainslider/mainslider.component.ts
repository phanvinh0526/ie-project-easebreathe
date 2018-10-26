import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

declare var $:any;
declare var Typewriter:any;


@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.css']
})
export class MainsliderComponent implements OnInit {

  navigationSubscription;
  private bgVideoSrc = "./assets/video/video-slide.mp4";

  
  constructor() { }

  ngOnInit() {

    
    /* -------BG Video banner -------*/
    $(function () {
      if ($(".my-background-video").length) {
         $('.my-background-video').bgVideo();
      }
    });


    /*----- Type Writter Effect -----*/
    if ($("#typewriting").length) {
      let app = document.getElementById("typewriting");
      let typewriter = new Typewriter(app, {
        loop: true
      });
      typewriter.typeString('Helps understand Asthma better').pauseFor(1000).deleteAll()
        .typeString('Check your child’s asthma control status.').pauseFor(1000).deleteAll()
        .typeString('Learn about asthma first aid.').pauseFor(1000).deleteAll()
        // .typeString('Asthma pollen map').pauseFor(1000).deleteAll()
        // .typeString('Weather map').pauseFor(1000).deleteAll()
        .typeString('View physical activities based on your child’s asthma condition.').start();
    }

  }


  // constructor(private router: Router) {
  //     // subscribe to the router events. Store the subscription so we can
  //     // unsubscribe later.
  //     this.navigationSubscription = this.router.events.subscribe((e: any) => {
  //       // If it is a NavigationEnd event re-initalise the component
  //       if (e instanceof NavigationEnd) {
  //         this.initialiseInvites();
  //       }
  //     });
  //  }

  // ngOnInit() {
  // }

  // initialiseInvites() {
  //   // Set default values and re-fetch any data you need.
  // }
 
  // ngOnDestroy() {
  //   if (this.navigationSubscription) {
  //     this.navigationSubscription.unsubscribe();
  //   }
  // }

}
