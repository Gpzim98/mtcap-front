import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {

  constructor(public http: Http) { }

    sendContact(contact) {
        let url = 'http://mtcap.herokuapp.com/api/contact/';
        let autorization: any =  { Authorization: 'Token 69d9c0bfad11b362e85481f5023930f651026580' }

        return this.http.post(
            url, contact, { headers: autorization}
        ).map(res => res.json());
    }
}
