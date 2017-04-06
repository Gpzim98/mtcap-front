import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: 'banners.html',
  styleUrls: ['style.css']
})
export class BannersComponent {
  @Input() banners = [
    {'url': 'link1', 'alt': 'my first slide'},
    {'url': 'link2', 'alt': 'my second slide'},
    {'url': 'link3', 'alt': 'my third slide'},
  ];

  constructor() {

  }

}
