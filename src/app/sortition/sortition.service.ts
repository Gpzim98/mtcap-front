import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SortitionService {

  constructor(public http: Http) { }


  getSortitionList() {
      let url = 'https://mtcap.herokuapp.com/api/sortitions/?limit=500';
      // let url = 'http://localhost:8000/api/sortitions/?limit=500';
      return this.http.get(url)
          .map(res => res.json());
  }

    getSortitions(id) {
        let url = 'https://mtcap.herokuapp.com/api/sortitions/' + id;
        // let url = 'http://localhost:8000/api/sortitions/' + id;
        return this.http.get(url)
            .map(res => res.json());
    }

}
