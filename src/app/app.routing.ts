import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SortitionComponent } from './sortition/sortition.component';
import { AboutUsComponent } from './about-us/about-us.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sorteios', component: SortitionComponent },
  { path: 'about-us', component: AboutUsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
