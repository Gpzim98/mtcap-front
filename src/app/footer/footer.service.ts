import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FooterService {

  constructor(public http: Http) { }

    getLatestSortition(){
        let url = 'https://mtcap.herokuapp.com/api/sortitions/';
        return this.http.get(url)
            .map(res => res.json());
    }
}
