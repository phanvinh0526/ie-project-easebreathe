import { Component, OnInit } from '@angular/core';

// declare var MainPage:any;


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  MainPage: boolean;

  constructor() { }

  ngOnInit() {

    this.MainPage = false;

  }

  _getMainpage(): boolean{
    return this.MainPage;
  }

}
