import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  @Input() statistique: Statistique | undefined;
  @Output() callDeleteStatistique: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  callDelete() {
    this.callDeleteStatistique.emit();
  }

}
