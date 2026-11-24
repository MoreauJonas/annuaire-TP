import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { PersonDetail } from './person-detail/person-detail';

export const routes: Routes = [
  { path: '', component: Home }, // l'adresse vide : localhost:4200/
  { path: 'personnes/:uuid', component: PersonDetail },

  { path: '**', component: NotFound }, // le joker : toutes les autres adresses
];
