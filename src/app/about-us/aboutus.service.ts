import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AboutUsService {

  constructor(public http: Http) { }

    getAboutUsContent() {
        let url = 'http://localhost:8000/api/pages/?search=SE';
        return this.http.get(url)
            .map(res => res.json());
    }

}
