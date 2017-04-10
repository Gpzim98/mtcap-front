import { Component, Input, OnInit } from '@angular/core';
import { BannersService } from './banners.service';


@Component({
  selector: 'app-banners',
  templateUrl: 'banners.html',
  styleUrls: ['style.css']
})
export class BannersComponent implements OnInit {
  banner: any;

  constructor(private bannersService: BannersService) { }

  ngOnInit() {
      this.constructBanners();
  }

  constructBanners() {
    this.bannersService.getImagesList()
    .subscribe(
        data => {
            this.banner = data[0];
            // console.log(this.banner);
        },
        error => console.log('Erro getGalleryId ' + error),
        // () => console.log('Finished getGalleryId '),
    );
  }
}
