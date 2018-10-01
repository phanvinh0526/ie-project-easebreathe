import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
// import {FORM_DIRECTIVES} from '@angular/common';


declare var $: any;



@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  // Local Variables
  scoreCounter: number = 0;


  constructor() { }

  ngOnInit() {

    // Icons Animation
    // this.sympControlAnimation();

    
  }

  onClickChange(num: number): void{
    this.scoreCounter += num;

  }

  sympControlAnimation(): void{

    // Good Control Animation
    $("#symp-good-control").click( function(event){
        // $("#symp-nav-default").fadeOut("fast", "linear");
        $("#symp-partial-control-child").fadeOut("fast", "linear");
        $("#symp-bad-control-child").fadeOut("fast", "linear");
        $("#symp-partial-control span").removeClass('card-header-primary');
        $("#symp-bad-control span").removeClass('card-header-primary');

        // Toggle
        $( "#symp-good-control-child" ).fadeToggle( "slow", "linear" );
        $("#symp-good-control span").toggleClass('card-header-primary');

    });
    // Partial Control Animation
    $("#symp-partial-control").click( function(event){
      // $("#symp-nav-default").fadeOut("fast", "linear");
      $("#symp-good-control-child").fadeOut("fast", "linear");
      $("#symp-bad-control-child").fadeOut("fast", "linear");
      $("#symp-good-control span").removeClass('card-header-primary');
      $("#symp-bad-control span").removeClass('card-header-primary');

      // Toggle
      $( "#symp-partial-control-child" ).fadeToggle( "slow", "linear" );
      $("#symp-partial-control span").toggleClass('card-header-primary');
    });
    // Bad Control Animation
    $("#symp-bad-control").click( function(event){
      // $("#symp-nav-default").fadeOut("fast", "linear");
      $("#symp-good-control-child").fadeOut("fast", "linear");
      $("#symp-partial-control-child").fadeOut("fast", "linear");
      $("#symp-partial-control span").removeClass('card-header-primary');
      $("#symp-good-control span").removeClass('card-header-primary');

      // Toggle
      $( "#symp-bad-control-child" ).fadeToggle( "slow", "linear" );
      $("#symp-bad-control span").toggleClass('card-header-primary');
    });

  }

}
