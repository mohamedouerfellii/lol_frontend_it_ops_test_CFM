import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HeroesComponent} from "./pages/heroes/heroes.component";
import {MyheroesComponent} from "./pages/myheroes/myheroes.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'myheroes',
    component: MyheroesComponent
  }
];
