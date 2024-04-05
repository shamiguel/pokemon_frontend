import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PokemonTeamService } from '../services/pokemon-team.service';
import { CommonModule } from '@angular/common';
import { PokemonCardService } from '../services/pokemon-card.service';
import { Pokemon } from '../../shared/pokemon_interface';
@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  constructor(private teamService: PokemonTeamService, private cardService: PokemonCardService) { }
  team: Pokemon[] = []
  @Input()
  monster:Pokemon ={name: '', url: ''};

  ngOnInit(){
    this.teamService.getTeam().subscribe(team => this.team = team);
    console.log(this.team)
  }


  addToTeam(monster:Pokemon){
    const newMemeber = monster;
    this.teamService.addToTeam(newMemeber);
    console.log(this.team)
  }

  removeFromTeam(monster:Pokemon){
    const remove = monster;
    this.teamService.removeFromTeam(remove);
  }
}
