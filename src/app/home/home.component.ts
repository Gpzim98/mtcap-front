import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nextSortition: any;

  constructor(public homeService: HomeService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
      this.loadNextSortition();
  }

  loadNextSortition() {
      this.homeService.getNextSortition().subscribe(
          data => {
              this.nextSortition = data[0];
      },
      error => console.log('Erro getNextSortition ' + error),
    );
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
