import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FooterService {

  constructor(public http: Http) { }

    getLatestSortition() {
        // let url = 'http://localhost:8000/api/sortitions-resume/?format=json&limit=10';
        let url = 'https://mtcap.herokuapp.com/api/sortitions-resume/?format=json';
        return this.http.get(url)
            .map(res => res.json());
    }
}
