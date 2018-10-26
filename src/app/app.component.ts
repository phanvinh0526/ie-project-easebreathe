import { Component, OnInit } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';


declare var $:any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'in4matics-v03';

  // Sets initial value to true to show loading spinner on first load
  // loading = true

  constructor(private router: Router, private spinner: NgxSpinnerService) {
    
    // Subscribe router events
    // router.events.subscribe((event: RouterEvent) => {
    //   this.navigationInterceptor(event)
    // })

    

    
  }

  ngOnInit(){

    // Loading spinner animation
  //   $(window).on("load", function () {
  //     "use strict";
  //     $(".loader").fadeOut(800);
   
  //  });

    
    this._loadSpinner();
   
  }

  _loadSpinner(): void{
    // Spinner loading
    this.spinner.show();
  
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        // console.log("Spinner finish in 5 sec");
        this.spinner.hide();
    }, 1000);
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {

    

    if (event instanceof NavigationStart) {
      console.log("In the navigation START");
      // console.log(event);
      if(event.url == '/home2#asthma-process' || event.url == '/home#homepage'){
        this._loadSpinner();
      }

    }
    if (event instanceof NavigationEnd) {
      console.log("In the navigation END");
      // this.loading = false
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      console.log("In the navigation CANCEL");
      // this.loading = false
    }
    if (event instanceof NavigationError) {
      console.log("In the navigation ERROR");
      // this.loading = false
    }
  }

}
