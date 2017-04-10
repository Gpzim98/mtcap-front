import { InliveComponent } from './inlive/inlive.component';
import { ContactComponent } from './contact/contact.component';
import { ResultsComponent } from './results/results.component';
import { NextSortitionComponent } from './next-sortition/next-sortition.component';
import { BeneficiaryInstitutionComponent } from './beneficiary-institution/beneficiary-institution.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConditionsComponent } from './conditions/conditions.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { PublicityComponent } from './publicity/publicity.component';
import { HomeComponent } from './home/home.component';
import { SortitionComponent } from './sortition/sortition.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SellingPointComponent } from './selling-point/selling-point.component';
import { TitleCapitalizationComponent } from './title-capitalization/title-capitalization.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nos', component: AboutUsComponent },
  { path: 'publicidade', component: PublicityComponent },
  { path: 'regulamento', component: RegulationsComponent },
  { path: 'condicoes', component: ConditionsComponent },
  { path: 'instituicao-beneficiada', component: BeneficiaryInstitutionComponent },
  { path: 'proximo-sorteio', component: NextSortitionComponent },
  { path: 'resultados', component: ResultsComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'pontos-de-venda', component: SellingPointComponent },
  { path: 'sorteio-ao-vivo', component: InliveComponent },
  { path: 'titulo-capitalizacao', component: TitleCapitalizationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
