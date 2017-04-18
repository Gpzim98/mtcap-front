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
import { ContactComponent } from './contact/contact.component';
import { BannersService } from './home/banners/banners.service';
import { AboutUsService } from './about-us/aboutus.service';
import { FooterService } from './footer/footer.service';
import { ContactService } from './contact/contact.service';
import { HomeService } from './home/home.service';
import { ConditionsService } from './conditions/conditions.service';
import { SellingPointComponent } from './selling-point/selling-point.component';
import { BeneficiaryInstitutionService } from './beneficiary-institution/beneficiary-institution.service';
import { InliveComponent } from './inlive/inlive.component';
import { TitleCapitalizationComponent } from './title-capitalization/title-capitalization.component';


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
    ContactComponent,
    SellingPointComponent,
    InliveComponent,
    TitleCapitalizationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SortitionModule,
  ],
  providers: [ BannersService, HomeService, FooterService,
    ContactService, AboutUsService, ConditionsService, BeneficiaryInstitutionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
