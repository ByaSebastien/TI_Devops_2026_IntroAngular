import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'pokedex',
    loadComponent: () =>
      import('./pages/pokedex/pokedex').then((m) => m.Pokedex),
  },
  {
    path: 'pokemon/:id',
    loadComponent: () =>
      import('./pages/poke-details/poke-details').then((m) => m.PokeDetails),
  },
  {
    path: 'poke-chriz',
    loadComponent: () =>
      import('./pages/poke-chriz/poke-chriz').then((m) => m.PokeChriz),
  },
];
















