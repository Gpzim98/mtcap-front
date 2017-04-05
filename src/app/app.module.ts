import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannersComponent } from './banners/banners.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app.routing.module';
import { SortitionModule } from './sortition/sortition.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    BannersComponent,
    HomeComponent,
    AboutUsComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SortitionModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
