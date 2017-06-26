import { APIProvider } from './../api-provider';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SortitionService {
  public apiProvider = new APIProvider();

  constructor(public http: Http) {
  }


  getSortitionList() {
      let url = this.apiProvider.url + 'sortitions-resume/?format=json';
      return this.http.get(url)
          .map(res => res.json());
  }

    getSortitions(id) {
        let url = this.apiProvider.url + 'sortitions/' + id + '/?format=json';
        return this.http.get(url)
            .map(res => res.json());
    }

}
