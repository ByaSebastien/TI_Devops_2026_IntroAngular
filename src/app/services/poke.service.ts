import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeApiResult } from '../models/poke-api-result';

@Injectable({
  providedIn: 'root',
})
export class PokeService {

  private readonly _http: HttpClient = inject(HttpClient);

  getPokemons() {
    return this._http.get<PokeApiResult>('https://pokeapi.co/api/v2/pokemon');
  }

}
