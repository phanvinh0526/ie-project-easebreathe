
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  role: string = 'test';

  asthmaIndicator:  number = 1;
  scoreCounter:     number = 0;
  enable:   boolean = false;

  isGoodControl:    boolean = false;
  isPartialControl: boolean = false;
  isBadControl:     boolean = false;


  _checkControlIndicator(): void {

    // console.log("Activity: ", this.asthmaIndicator);

    if(this.asthmaIndicator == 1){
      // console.log("In good control");
        this.isGoodControl = true;
        this.isPartialControl = false;
        this.isBadControl = false;
    }
    if(this.asthmaIndicator == 2){
        this.isBadControl = false;
        this.isPartialControl = true;
        this.isGoodControl = false;
    }
    if(this.asthmaIndicator == 3){
      this.isBadControl = true;
      this.isGoodControl = false;
      this.isPartialControl = false;
    }

    // console.log(this.controlIndicator);
    // console.log("Partial: ",this.isPartialControl);
    // console.log("Good", this.isGoodControl);
    this.enable = true;
  }
}