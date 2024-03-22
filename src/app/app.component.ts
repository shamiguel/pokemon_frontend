import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon_frontend';
  rawData:any;
  pokemon:any = [];
  

  ngOnInit(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    fetch(url).then(response => response.json()).then(data => {
      this.rawData = data.results;
      this.rawData.map((monster:any)=>{
        let pocketmonster:any = {};
        fetch(monster.url).then(response => response.json()).then(data => {
          console.log(data);
          pocketmonster = data;
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${pocketmonster.name}/`).then(response => response.json()).then(data=>{
            //console.log(data.flavor_text_entries[0].flavor_text);
            let entry = data.flavor_text_entries[0].flavor_text.replace(/\n/g, '');
            pocketmonster['dex_entry'] = entry;
          });
          this.pokemon.push(pocketmonster);
        });
      });
    });
  };

    async getPokemon(){
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
      const rawData = await fetch(url).then(response => response.json())
      this.rawData = rawData.results;
      console.log(this.rawData);
      const monsterPromises = this.rawData.map((monster:any) => {
        return fetch(monster.url)
            .then(response => response.json());
    });
    
    const monsters = await Promise.all(monsterPromises);
    this.pokemon = await monsters.forEach((pocketmonster:any)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pocketmonster.name}/`).then(response => response.json()).then(data=>{
            console.log(data.flavor_text_entries[0].flavor_text);
            let entry = data.flavor_text_entries[0].flavor_text.replace(/\n/g, '');
            pocketmonster['dex_entry'] = entry;
          });
      })
    }
  }
