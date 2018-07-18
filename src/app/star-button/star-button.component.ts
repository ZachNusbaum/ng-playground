import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-button',
  templateUrl: './star-button.component.html',
  styleUrls: ['./star-button.component.css']
})
export class StarButtonComponent implements OnInit {
  isFavorited = false;

  constructor() { }

  ngOnInit() {
  }

  toggleFavorited() {
    this.isFavorited = !this.isFavorited;
  }
  /*
  toggleFavorite($event) {
    console.log($event);
    if ($event.target.className === 'not-favorite') {
      $event.target.setAttribute('class', 'favorite');
    } else {
      $event.target.setAttribute('class', 'not-favorite');
    }
  }
  */

}
