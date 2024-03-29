import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  rawData:any;
  pokemon:any[] = [];

  fetchPokemon(): Promise<any[]> {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            this.rawData = data.results;
            const fetchPromises = this.rawData.map((monster:any) => {
                return fetch(monster.url)
                    .then(response => response.json())
                    .then(data => {
                        let pocketmonster = data;
                        return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pocketmonster.name}/`)
                            .then(response => response.json())
                            .then(data => {
                                let entry = data.flavor_text_entries[0].flavor_text.replace(/\n/g, '');
                                pocketmonster['dex_entry'] = entry;
                                return pocketmonster;
                            });
                    });
            });

            // Wait for all promises to resolve
            return Promise.all(fetchPromises);
        });
}
}
