import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
// import {FORM_DIRECTIVES} from '@angular/common';

import { SYMPTOMS } from '../../shared/symptoms-obj';

// Plugins
import swal from 'sweetalert';


declare var $: any;



@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  // Local Variables
  scoreCounter: number = 0;
  symptoms: any = SYMPTOMS;
  selectSymptom: any;
  link: any;

  constructor() { }

  ngOnInit() {

    // Icons Animation
    // this.sympControlAnimation();

  }

  onSelectSurvey(): void{
    // swal("Do you want to jump to Physicial Activities Recommendation?", {
    //   buttons: ["No, go to Weather", "Yes, i do"],
    // });

    swal("Do you want to jump to Physicial Activities Recommendation?", {
      buttons: {
        catch_1: {
          text: "Yes, i do",
          value: "jump",
        },
        catch_2: {
          text: "No, go to Weather",
          value: "go",
        }
      },
    })
    .then((value) => {
      // this.link = document.createElement("a");

      // switch (value) {
      //   case "go":
      //     swal("Pikachu fainted! You gained 500 XP!");
      //     break;
     
      //   case "jump":
          
      //     this.link.href = "#asthma-activity";
      //     this.link.add = "button btnsecondary btn-gradient-hvr pagescroll"; // doesnt work
      //     this.link.text = "Click Here";

      //     swal("Gotcha!", {
      //       icon: "success",
      //       content: this.link
      //     });
      //     break;
     
      //   default:
      //     swal("Cancel!", "warning");
      // }

      document.querySelector('#asthma-activity').scrollIntoView();

    });
  }


  onSelectionChange(idx: number, symp: any, indicator: string): void{
    // this.selectSymptom = symp;
    // console.log('Symp: ', symp);

    if(indicator == 'coughing'){
      this.symptoms[idx].coughing_checked = true;
      this.symptoms[idx].tightness_checked = false;
      this.symptoms[idx].wheezing_checked = false;
    }
    if(indicator == 'tightness'){
      this.symptoms[idx].tightness_checked = true;
      this.symptoms[idx].coughing_checked = false;
      this.symptoms[idx].wheezing_checked = false;
    }
    if(indicator == 'wheezing'){
      this.symptoms[idx].wheezing_checked = true;
      this.symptoms[idx].coughing_checked = false;
      this.symptoms[idx].tightness_checked = false;
    }

    // Update counter
    this.scoreCounter = 0;
    for(let i=0; i < this.symptoms.length; i++){
        if(this.symptoms[i].coughing_checked == true){
          this.scoreCounter += this.symptoms[i].coughing_value;
        }
        if(this.symptoms[i].tightness_checked == true){
          this.scoreCounter += this.symptoms[i].tightness_value;
        }
        if(this.symptoms[i].wheezing_checked == true){
          this.scoreCounter += this.symptoms[i].wheezing_value;
        }
    }

    this._checkAsthmaControl();
  }


  _checkAsthmaControl(): void{

    if(this.scoreCounter >= 5 && this.scoreCounter <= 9){
      // console.log('poor control');
      $('#bad-control').addClass('card-header-danger');
      $('#partial-control').removeClass('card-header-warning');
      $('#good-control').removeClass('card-header-success');
    }
    if(this.scoreCounter >= 10 && this.scoreCounter <= 15){
      $('#bad-control').removeClass('card-header-danger');
      $('#partial-control').addClass('card-header-warning');
      $('#good-control').removeClass('card-header-success');
    }
    if(this.scoreCounter >= 16 && this.scoreCounter <= 25){
      $('#bad-control').removeClass('card-header-danger');
      $('#partial-control').removeClass('card-header-warning');
      $('#good-control').addClass('card-header-success');
    }

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
