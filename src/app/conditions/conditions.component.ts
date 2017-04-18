import { Component, OnInit } from '@angular/core';
import { ConditionsService } from './conditions.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  public content: any;

  constructor(public conditionsService: ConditionsService) { }

  ngOnInit() {
    this.loadConditionsContent();
  }

  loadConditionsContent() {
      this.conditionsService.getConditionsContent().subscribe(
          data => {
              this.content = data[0];
              console.log(this.content);
      },
      error => console.log('Erro getConditionsContent ' + error),
    );
  }
}
