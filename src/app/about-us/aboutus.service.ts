import { APIProvider } from './../api-provider';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AboutUsService {
    public apiProvider: APIProvider;

  constructor(public http: Http) { 
      this.apiProvider = new APIProvider();
  }

    getAboutUsContent() {
        let url = this.apiProvider.url + 'pages/?search=SE';
        return this.http.get(url)
            .map(res => res.json());
    }

}
