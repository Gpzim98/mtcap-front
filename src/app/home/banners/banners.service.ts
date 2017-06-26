import { APIProvider } from './../../api-provider';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BannersService{
  public apiProvider = new APIProvider();
  public url: string;
  public url_galery: string;
  
  constructor(public http: Http) {
      this.url_galery = this.apiProvider.url + 'galleries/?format=json&search=true';
      this.url = this.apiProvider.url + 'galleries/?search=true';

   }


    getGalleryId() {
        return this.http.get(this.url_galery)
            .map(res => res.json());
    }

    getImagesList() {
        return this.http.get(this.url)
            .map(res => res.json());
    }
}
