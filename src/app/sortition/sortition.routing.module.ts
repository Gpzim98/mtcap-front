import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SortitionComponent } from './sortition.component';
import { SortitionDetailComponent } from './sortition-detail/sortition-detail.component';


const SortitionRoutes = [
  { path: 'sorteios', component: SortitionComponent, children: [
        { path: ':id', component: SortitionDetailComponent },
  ]},
];

@NgModule({
    imports: [ RouterModule.forChild(SortitionRoutes)],
    exports: [ RouterModule ],
})
export class SortitionRoutingModule {

}