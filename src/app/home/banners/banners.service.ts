import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BannersService{
  url_galery = 'https://mtcap.herokuapp.com/api/galleries/?format=json&search=true';
  url = 'https://mtcap.herokuapp.com/api/galleries/?search=true';

  constructor(public http: Http) { }


    getGalleryId() {
        return this.http.get(this.url_galery)
            .map(res => res.json());
    }

    getImagesList() {
        return this.http.get(this.url)
            .map(res => res.json());
    }
}
