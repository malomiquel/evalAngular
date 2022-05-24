import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
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

  deleteStatistique(statistique: Statistique) {
    const index = this.statistiqueService.tabStatistique.indexOf(statistique);
    this.statistiqueService.tabStatistique.splice(index, 1);
  }
}
