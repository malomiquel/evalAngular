import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Statistique } from 'src/app/models/statistique';
import { StatistiqueService } from 'src/app/statistique.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-ajouter',
  templateUrl: './page-ajouter.component.html',
  styleUrls: ['./page-ajouter.component.css']
})
export class PageAjouterComponent implements OnInit {

  identifiant!: string;
  titre!: string;
  valeur!: string;

  constructor(public statistiqueService: StatistiqueService, private router: Router) {}

  ngOnInit(): void {
  }

  addStatistique(form: NgForm) {
    let statistique: Statistique = {
      identifiant: this.identifiant,
      titre: this.titre,
      valeur: this.valeur
    };
    this.statistiqueService.tabStatistique.push(statistique);
    Swal.fire({
      title: 'Que voulez-vous faire ?',
      showCancelButton: true,
      confirmButtonText: 'Ajouter une autre statistique',
      cancelButtonText: 'Retourner à la liste',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Votre statistique a bien été ajouté',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      } else if (result.isDismissed) {
        Swal.fire({
          icon: 'success',
          title: 'Votre statistique a bien été ajouté',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        this.router.navigate(['/liste']);
      }
    });
  }
}
