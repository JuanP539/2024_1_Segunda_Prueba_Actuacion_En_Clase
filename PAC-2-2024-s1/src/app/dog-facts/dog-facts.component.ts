import { Component } from '@angular/core';
import { DogFactServiceService } from '../dog-fact-service.service';

@Component({
  selector: 'app-dog-facts',
  templateUrl: './dog-facts.component.html',
  styleUrls: ['./dog-facts.component.scss']
})
export class DogFactsComponent {
  constructor(private dogFactService: DogFactServiceService) { }

  getDogFact(){
    this.dogFactService.getDogFact();
  }

}
