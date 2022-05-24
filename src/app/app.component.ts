import { Component } from '@angular/core';
import { StatistiqueService } from './statistique.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  public statistiqueService: StatistiqueService;

  constructor(statistiqueService: StatistiqueService) {
    this.statistiqueService = statistiqueService;
  }
}
