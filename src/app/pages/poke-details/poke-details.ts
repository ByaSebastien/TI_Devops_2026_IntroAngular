import {
  Component,
  effect,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../../app.routes';
import { POKEMONS } from '../../data/pokemons.data';
import { PokeCard } from '../../components/poke-card/poke-card';

@Component({
  selector: 'app-poke-details',
  imports: [PokeCard],
  templateUrl: './poke-details.html',
  styleUrl: './poke-details.scss',
})
export class PokeDetails {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  pokemonId!: number;
  pokemon: WritableSignal<Pokemon | undefined> = signal(undefined);

  constructor() {

    this.route.params.subscribe(params => {
      // console.log("in subscribe");
      this.pokemonId = +params['id'];
      this.loadPokemon();
    });

    // la methode dans le effect se declenche a chaque changement de valeur du signal(set())
    // angular a deja mis un effect sur tout signal pour dire de re render l html
    // concerné par le signal affiché
    // Si votre page se re render pas avec une prop classique -> signal
    // effect(() => {
    //   console.log(this.pokemon());
    // });
    //
    // setInterval(() => {
    //   this.pokemonId++;
    //   this.loadPokemon();
    // }, 1000);
  }

  loadPokemon() {
    this.pokemon.set(POKEMONS.find((p) => p.id === this.pokemonId)!);
  }

  previous() {
    let target = this.pokemonId == 1 ? POKEMONS.length : this.pokemonId - 1;
    this.router.navigate([`/pokemon/${target}`]);
  }

  next() {
    let target = this.pokemonId == POKEMONS.length ? 1 : this.pokemonId + 1;
    this.router.navigate([`/pokemon/${target}`]);
  }
}
