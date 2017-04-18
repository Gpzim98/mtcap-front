import { BeneficiaryInstitutionService } from './beneficiary-institution.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiary-institution',
  templateUrl: './beneficiary-institution.component.html',
  styleUrls: ['./beneficiary-institution.component.css']
})
export class BeneficiaryInstitutionComponent implements OnInit {

  public content: any;

  constructor(public benefInstitution: BeneficiaryInstitutionService) { }

  ngOnInit() {
    this.loadBenefInstitutionContent();
  }

  loadBenefInstitutionContent() {
      this.benefInstitution.getBenefInstitutionContent().subscribe(
          data => {
              this.content = data[0];
      },
      error => console.log('Erro getConditionsContent ' + error),
    );
  }

}
