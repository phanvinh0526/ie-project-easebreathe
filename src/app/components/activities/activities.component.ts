import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  controlIndicator: number = 1; // as default: good control
  isGoodControl: boolean = false;
  isPartialControl: boolean = false;
  isBadControl: boolean = false;

  constructor() { }

  ngOnInit() {


    this._checkControlIndicator();


  }

  _checkControlIndicator(): void{

    // console.log(this.controlIndicator);

    if(this.controlIndicator == 1){
      // console.log("In good control");
        this.isGoodControl = true;
        this.isPartialControl = false;
        this.isBadControl = false;
    }
    if(this.controlIndicator == 2){
        this.isBadControl = false;
        this.isPartialControl = true;
        this.isGoodControl = false;
    }
    if(this.controlIndicator == 3){
      this.isBadControl = true;
      this.isGoodControl = false;
      this.isPartialControl = false;
    }

    // console.log(this.controlIndicator);
    // console.log("Partial: ",this.isPartialControl);
    // console.log("Good", this.isGoodControl);
  }

}
