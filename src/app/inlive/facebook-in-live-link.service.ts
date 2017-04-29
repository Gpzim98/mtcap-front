import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FacebookInLiveLinkService {

  constructor(public http: Http) { }

    getFacebookInLineLink() {
        let url = 'http://localhost:8000/api/facebook-inline/';
        return this.http.get(url)
            .map(res => res.json());
    }

}
