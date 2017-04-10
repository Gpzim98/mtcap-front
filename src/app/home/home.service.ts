import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HomeService {

  constructor(public http: Http) { }

    getNextSortition() {
        let url = 'https://mtcap.herokuapp.com/api/sortitions/?search=true';
        return this.http.get(url)
            .map(res => res.json());
    }

}
