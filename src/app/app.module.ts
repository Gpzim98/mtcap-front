import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannersComponent } from './home/banners/banners.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app.routing.module';
import { SortitionModule } from './sortition/sortition.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BeneficiaryInstitutionComponent } from './beneficiary-institution/beneficiary-institution.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { PublicityComponent } from './publicity/publicity.component';
import { NextSortitionComponent } from './next-sortition/next-sortition.component';
import { ResultsComponent } from './results/results.component';
import { ContactComponent } from './contact/contact.component';
import { BannersService } from './home/banners/banners.service';


@NgModule({
  declarations: [
    AppComponent,
    BannersComponent,
    HomeComponent,
    AboutUsComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    BeneficiaryInstitutionComponent,
    ConditionsComponent,
    RegulationsComponent,
    PublicityComponent,
    NextSortitionComponent,
    ResultsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SortitionModule,
  ],
  providers: [ BannersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
