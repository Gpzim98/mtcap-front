import { Component, OnInit } from '@angular/core';
import { HomeService } from './../home/home.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-next-sortition',
  templateUrl: './next-sortition.component.html',
  styleUrls: ['./next-sortition.component.css']
})
export class NextSortitionComponent implements OnInit {
  nextSortition: any;

  constructor(public homeService: HomeService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
      this.loadNextSortition();
  }

  loadNextSortition() {
      this.homeService.getNextSortition().subscribe(
          data => {
              this.nextSortition = data.results[0];
      },
      error => console.log('Erro getNextSortition ' + error),
    );
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
