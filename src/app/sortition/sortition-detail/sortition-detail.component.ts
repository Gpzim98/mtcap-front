import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-sortition-detail',
  templateUrl: './sortition-detail.component.html',
  styleUrls: ['./sortition-detail.component.css']
})
export class SortitionDetailComponent implements OnInit, OnDestroy {
  public id: string;
  public subscription: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.id = params['id'];
            }
        );
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}
