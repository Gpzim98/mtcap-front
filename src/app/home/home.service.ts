import { APIProvider } from './../api-provider';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HomeService {
    public apiProvider = new APIProvider();

  constructor(public http: Http) {
      this.apiProvider = new APIProvider();
   }

    getNextSortition() {
        let url = this.apiProvider.url + 'sortitions/?format=json&search=true';
        return this.http.get(url)
            .map(res => res.json());
    }

}
