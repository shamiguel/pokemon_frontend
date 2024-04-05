import { Injectable } from '@angular/core';
import { Pokemon } from '../../shared/pokemon_interface';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  rawData:any;
  pokemon:Pokemon[] = [];

  fetchPokemon(): Promise<Pokemon[]> {
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
    };

    fetchMock(): Observable<any> {
        // Mocked data, replace it with your desired data
        const mockData = [
          { name: 'Bigachew', url: 'pokemon.com' },
          { name: 'Nyeeooowth', url: 'pokemon.com'  },
          // Add more mock data items as needed
        ];
        return of(mockData);
      }
}
