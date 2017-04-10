import { FooterService } from './footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  latestSortitions: any[];

  constructor(public footerService: FooterService) { }

  ngOnInit() {
      this.loadLatestSortition();
  }

  loadLatestSortition() {
      this.footerService.getLatestSortition().subscribe(
          data => {
              this.latestSortitions = data.results;
      },
      error => console.log('Erro getNextSortition ' + error),
    );
  }

}
