import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Link } from '../../models/link';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

  links: Link[] = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/pokedex', label: 'Pokedex' },
    { path: '/poke-chriz', label: 'Poke Chriz' },
  ];
}







