import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { DecimalPipe } from '@angular/common';
import { PokeImagePipe } from '../../pipes/poke-image-pipe';

@Component({
  selector: 'app-poke-card',
  imports: [DecimalPipe, PokeImagePipe],
  templateUrl: './poke-card.html',
  styleUrl: './poke-card.scss',
})
export class PokeCard {
  @Input({ required: true })
  pokemon!: Pokemon;
}
