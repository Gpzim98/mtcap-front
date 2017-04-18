import { Component, OnInit } from '@angular/core';
import { AboutUsService } from './aboutus.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public content: any;

  constructor(public aboutUsService: AboutUsService) { }

  ngOnInit() {
    this.loadNextSortition();
  }

  loadNextSortition() {
      this.aboutUsService.getAboutUsContent().subscribe(
          data => {
              this.content = data[0];
      },
      error => console.log('Erro getAboutUsContent ' + error),
    );
  }
}
