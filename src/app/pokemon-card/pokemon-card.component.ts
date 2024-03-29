import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input()
  monster:any;
}
