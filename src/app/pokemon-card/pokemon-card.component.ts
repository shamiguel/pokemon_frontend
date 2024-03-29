import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PokemonTeamService } from '../pokemon-team.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  constructor(private teamService: PokemonTeamService) { }
  team: any[] = []
  @Input()
  monster:any;

  ngOnInit(){
    this.teamService.getTeam().subscribe(team => this.team = team);
    console.log(this.team)
  }

  addToTeam(monster:any){
    const newMemeber = monster;
    this.teamService.addToTeam(newMemeber);
    console.log(this.team)
  }

  removeFromTeam(monster:any){
    const remove = monster;
    this.teamService.removeFromTeam(remove);
  }
}
