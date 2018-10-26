import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickEvent(): void{
    console.log("process-scroll-down");

    document.querySelector('#process-scroll-down').scrollIntoView();

  }

}
