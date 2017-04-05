import { SortitionServiceComponent } from './sortition-service/sortition-service.component';
import { SortitionDetailComponent } from './sortition-detail/sortition-detail.component';
import { SortitionRoutingModule } from './sortition.routing.module';
import { SortitionComponent } from './sortition.component';
import { routing } from './../app.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [ CommonModule, SortitionRoutingModule ],
    exports: [ SortitionDetailComponent, SortitionComponent],
    declarations: [ SortitionComponent, SortitionDetailComponent ],
    providers: [ SortitionServiceComponent ]
})
export class SortitionModule {

}