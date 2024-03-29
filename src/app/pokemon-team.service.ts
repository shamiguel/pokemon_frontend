import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonTeamService {
  private team = new BehaviorSubject<any[]>([]);

  constructor() { }

  addToTeam(pokemon:any){
    const currentTeam  = this.team.getValue();
    const newTeam = [...currentTeam, pokemon];
    this.team.next(newTeam);
  }

  getTeam(){
    return this.team.asObservable();
  }

  removeFromTeam(mon:any){
    const currentTeam = this.team.getValue();
    const updatedTeam = currentTeam.filter(mon => mon.name === mon.name);
    this.team.next(updatedTeam);
  }
}
