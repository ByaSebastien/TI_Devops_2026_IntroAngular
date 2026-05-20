import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeImage',
})
export class PokeImagePipe implements PipeTransform {
  transform(pokemonId: number, ...args: unknown[]): unknown {
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + pokemonId + '.svg';
  }
}
