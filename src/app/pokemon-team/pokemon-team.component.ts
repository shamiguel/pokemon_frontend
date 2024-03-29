import { Component } from '@angular/core';
import { PokemonTeamService } from '../pokemon-team.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.css'
})
export class PokemonTeamComponent {

  team:any[] = [];

  constructor(private teamService: PokemonTeamService){}

  ngOnInit(){
    this.teamService.getTeam().subscribe(data => {
      this.team = data;
    })
  }
}
