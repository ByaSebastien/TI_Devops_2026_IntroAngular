import {
  Component,
  inject,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeApiResult } from '../../models/poke-api-result';
import { toSignal } from '@angular/core/rxjs-interop';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-poke-chriz',
  imports: [],
  templateUrl: './poke-chriz.html',
  styleUrl: './poke-chriz.scss',
})
export class PokeChriz {

  // private readonly _http: HttpClient = inject(HttpClient);
  private readonly _pokeService: PokeService = inject(PokeService);

  // pokeResult: Signal<PokeApiResult | undefined> = signal(undefined);
  pokeResult: Signal<PokeApiResult | undefined>;

  constructor() {
    this.pokeResult = toSignal(this._pokeService.getPokemons());
    // this.pokeResult = toSignal(
    //   this._http.get<PokeApiResult>('https://pokeapi.co/api/v2/pokemon')
    // );
    // this.loadPokemon();
  }

  // loadPokemon() {
  //   this._http.get<PokeApiResult>('https://pokeapi.co/api/v2/pokemon').subscribe(
  //     result => {
  //       this.pokeResult.set(result);
  //     }
  //   );
  // }
}





