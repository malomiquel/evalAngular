import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAjouterComponent } from './pages/page-ajouter/page-ajouter.component';
import { PageListeComponent } from './pages/page-liste/page-liste.component';

const routes: Routes = [
  { path: 'liste', component: PageListeComponent },
  { path: 'ajout', component: PageAjouterComponent },
  { path: '', component: PageListeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
