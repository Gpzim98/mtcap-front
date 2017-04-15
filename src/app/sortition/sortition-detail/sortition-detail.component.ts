import { SortitionService } from './../sortition.service';
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
  sortition: any;

    constructor(private route: ActivatedRoute,
        public sortitionService: SortitionService) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.sortitionService.getSortitions(params['id']).subscribe(
                    (data) => {
                        this.sortition = data;
                    });
            }
        );
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
