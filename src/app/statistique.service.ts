import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

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
