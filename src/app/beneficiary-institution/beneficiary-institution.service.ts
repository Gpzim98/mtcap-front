import { APIProvider } from './../api-provider';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BeneficiaryInstitutionService {
    public apiProvider: APIProvider;

  constructor(public http: Http) { 
      this.apiProvider = new APIProvider();
  }

    getBenefInstitutionContent() {
        let url = this.apiProvider.url + 'beneficiary-institution/';
        return this.http.get(url)
            .map(res => res.json());
    }

}
