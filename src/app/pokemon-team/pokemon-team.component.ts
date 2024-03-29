import { Component } from '@angular/core';
import { PokemonTeamService } from '../services/pokemon-team.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PokemonCardService } from '../services/pokemon-card.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.css'
})
export class PokemonTeamComponent {

  team:any[] = [];

  constructor(private teamService: PokemonTeamService, private cardService: PokemonCardService){}

  ngOnInit(){
    this.teamService.getTeam().subscribe(data => {
      this.team = data;
    })
  }

  displayPokemon(pokemon:any){
    console.log("changing")
    this.cardService.changePokemon(pokemon);
  }
}
