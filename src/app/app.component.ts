import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabStatistique: Statistique[] = [
    {
      identifiant: 'stat1',
      titre: 'Statistique 1',
      valeur: '20M',
    },
    {
      identifiant: 'stat2',
      titre: 'Statistique 2',
      valeur: '50M',
    },
  ];

  nouvelleStatistic: Statistique = {
    identifiant: 'stat3',
    titre: 'Statistique 3',
    valeur: '100M',
  };

  constructor() {
    setTimeout(() => {
      this.tabStatistique.push(this.nouvelleStatistic);
    }, 3000);
  }
}
