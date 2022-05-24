import { Component, OnInit } from '@angular/core';
import { Statistique } from 'src/app/models/statistique';
import { StatistiqueService } from 'src/app/statistique.service';

@Component({
  selector: 'app-page-liste',
  templateUrl: './page-liste.component.html',
  styleUrls: ['./page-liste.component.css']
})
export class PageListeComponent implements OnInit {
  
  public statistiqueService: StatistiqueService;

  constructor(statistiqueService: StatistiqueService) {
    this.statistiqueService = statistiqueService;
  }

  deleteStatistique(statistique: Statistique) {
    const index = this.statistiqueService.tabStatistique.indexOf(statistique);
    this.statistiqueService.tabStatistique.splice(index, 1);
  }

  ngOnInit() {
  }

}
