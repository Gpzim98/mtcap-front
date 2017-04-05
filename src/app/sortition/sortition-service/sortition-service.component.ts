import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortition-service',
  templateUrl: './sortition-service.component.html',
  styleUrls: ['./sortition-service.component.css']
})
export class SortitionServiceComponent implements OnInit {

  constructor() { }

  getSortitions(){
    return [
      {id: 1, edition: '65165'},
      {id: 2, edition: '1234'},
    ]
  }

  ngOnInit() {
  }

}
