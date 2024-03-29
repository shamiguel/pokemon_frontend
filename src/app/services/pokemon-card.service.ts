import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardService {

  private pokemon = new BehaviorSubject<any>({});

  changePokemon(poketomonsta:any){
    this.pokemon = poketomonsta;
  }

  showPokemon(){
    return this.pokemon;
  }

  constructor() { }
}
