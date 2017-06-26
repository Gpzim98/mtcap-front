import { APIProvider } from './../api-provider';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ConditionsService {

    public apiProvider: APIProvider;

    constructor(public http: Http) {
        this.apiProvider = new APIProvider();
    }
    getConditionsContent() {
        let url = this.apiProvider.url + 'pages/?search=CD';
        return this.http.get(url)
            .map(res => res.json());
    }

}
