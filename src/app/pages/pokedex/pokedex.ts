import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Pokemon } from '../../models/pokemon';
import { POKEMONS } from '../../data/pokemons.data';
import { PokeImagePipe } from '../../pipes/poke-image-pipe';


@Component({
  selector: 'app-pokedex',
  imports: [DecimalPipe, PokeImagePipe],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.scss',
})
export class Pokedex {
  pokemons: Pokemon[] = POKEMONS;
}
