import { SortitionService } from './sortition.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sortition',
  templateUrl: './sortition.component.html',
  styleUrls: ['./sortition.component.css']
})
export class SortitionComponent implements OnInit {

  sortitions: any[];

  constructor(public sortitionService: SortitionService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadLatestSortition();
  }

  loadLatestSortition() {
      this.sortitionService.getSortitionList().subscribe(
          data => {
              this.sortitions = data.results;
      },
      error => console.log('Erro getNextSortition ' + error),
    );
  }

  redirect() {
    console.log('foi');
    this.router.navigate(['']);
  }

}
