import { FacebookInLiveLinkService } from './facebook-in-live-link.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-inlive',
  templateUrl: './inlive.component.html',
  styleUrls: ['./inlive.component.css']
})
export class InliveComponent  {
    public facebookLink = '';

    constructor(public faceLinkService: FacebookInLiveLinkService) { 
        this.loadFacebookInLineLink();
    }

    loadFacebookInLineLink() {
        this.faceLinkService.getFacebookInLineLink().subscribe(
            data => {
                this.facebookLink = data[0].link;
        },
        error => console.log('Erro loadFacebookInLineLink ' + error),
      );
    }

}
