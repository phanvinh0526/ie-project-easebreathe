import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Dummy function
  _autocomplete(): void {
    let card = document.getElementById('pac-card');
    let input = document.getElementById('pac-input');
  }

}
