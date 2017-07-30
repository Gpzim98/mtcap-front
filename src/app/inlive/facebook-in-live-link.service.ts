import { APIProvider } from './../api-provider';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FacebookInLiveLinkService {
    public apiProvider = new APIProvider();
    public facebookLink = '';

  constructor(public http: Http) { }

    getFacebookInLineLink() {
        let url = this.apiProvider.url + 'facebook-inline/';
        return this.http.get(url)
            .map(res => this.facebookLink = res.json());
    }

}
