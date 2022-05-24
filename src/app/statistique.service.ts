import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatistiqueBack } from './models/apiTypes';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  tabStatistique: Statistique[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<StatistiqueBack[]>('https://stats.naminilamy.fr')
      .subscribe((res) => {
        for (const statistique of res) {
          this.tabStatistique.push({
            identifiant: statistique.id,
            titre: statistique.title,
            valeur: statistique.value,
          });
        }
      });
  }
}
