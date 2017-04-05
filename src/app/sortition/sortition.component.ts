import { Component, OnInit } from '@angular/core';
import {SortitionServiceComponent} from "./sortition-service/sortition-service.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sortition',
  templateUrl: './sortition.component.html',
  styleUrls: ['./sortition.component.css']
})
export class SortitionComponent implements OnInit {

  sortitions: any[];

  constructor(public sortitionService: SortitionServiceComponent,
    public router: Router
  ) { }

  ngOnInit() {
    this.sortitions = this.sortitionService.getSortitions();
  }

  redirect(){
    console.log('foi');
    this.router.navigate(['']);
  }

}
