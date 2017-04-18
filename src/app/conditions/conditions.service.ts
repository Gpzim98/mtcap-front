import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ConditionsService {

  constructor(public http: Http) { }

    getConditionsContent() {
        let url = 'https://mtcap.herokuapp.com/api/pages/?search=CD';
        return this.http.get(url)
            .map(res => res.json());
    }

}
