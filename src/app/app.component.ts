import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statistique1: Statistique = {
    identifiant: 'stat1',
    titre: 'Statistique 1',
    valeur: '20M'
  };

  statistique2: Statistique = {
    identifiant: 'stat2',
    titre: 'Statistique 2',
    valeur: '50M'
  };
}
