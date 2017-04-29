import { NotFoundComponent } from './../not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SortitionComponent } from './sortition.component';
import { SortitionDetailComponent } from './sortition-detail/sortition-detail.component';


const SortitionRoutes = [
  { path: 'resultados', component: SortitionComponent, children: [
        { path: ':id', component: SortitionDetailComponent },
  ]},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
    imports: [ RouterModule.forChild(SortitionRoutes)],
    exports: [ RouterModule ],
})
export class SortitionRoutingModule {

}