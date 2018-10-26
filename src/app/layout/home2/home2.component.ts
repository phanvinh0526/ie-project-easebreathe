import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 

declare var $:any;

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    /* ------- Navigating ------- */
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    /* ------- /Navigating ------- */


  }

  ngAfterViewInit(): void {
    try {

      // console.log("HERE: AfterViewInit", this.fragment);

      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
