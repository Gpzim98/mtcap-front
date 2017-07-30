import { APIProvider } from './../api-provider';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FooterService {
  public apiProvider = new APIProvider();

  constructor(public http: Http) { }

    getLatestSortition() {
        let url = this.apiProvider.url + 'sortitions-resume/?format=json&limit=10';
        return this.http.get(url)
            .map(res => res.json());
    }
}
