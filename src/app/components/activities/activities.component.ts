import { Component, OnInit } from '@angular/core';

import { Globals } from '../../globals';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  // controlIndicator: number = 2; // as default: good control
  

  constructor(private globals: Globals) { }

  ngOnInit() {


    // this._checkControlIndicator();


  }

  

}
