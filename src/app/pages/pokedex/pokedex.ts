import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Pokemon } from '../../models/pokemon';
import { POKEMONS } from '../../data/pokemons.data';
import { PokeImagePipe } from '../../pipes/poke-image-pipe';
import { PokeCard } from '../../components/poke-card/poke-card';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-pokedex',
  imports: [DecimalPipe, PokeImagePipe, PokeCard, RouterLink],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.scss',
})
export class Pokedex {
  pokemons: Pokemon[] = POKEMONS;
}
