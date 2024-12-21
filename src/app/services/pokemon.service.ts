import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getFirstNinePokemons(): Observable<any[]> {
    return this.http.get<{ results: any[] }>(`${this.baseUrl}?limit=9`).pipe(
      switchMap((response) => {
        const pokemonRequests: Observable<any>[] = response.results.map((pokemon) =>
          this.http.get(pokemon.url).pipe(
            map((pokemonDetails: any) => ({
              id: `#${String(pokemonDetails.id).padStart(3, '0')}`,
              name: pokemonDetails.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`,
              stats: pokemonDetails.stats,
              types: pokemonDetails.types.map((type: any) => type.type.name),
            }))
          )
        );
        return forkJoin(pokemonRequests);
      })
    );
  }

  searchPokemon(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${query}`);
  }
}
