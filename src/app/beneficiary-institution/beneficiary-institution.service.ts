import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BeneficiaryInstitutionService {

  constructor(public http: Http) { }

    getBenefInstitutionContent() {
        let url = 'https://mtcap.herokuapp.com/api/beneficiary-institution/';
        return this.http.get(url)
            .map(res => res.json());
    }

}
