import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-selected-pokemon',
  templateUrl: './selected-pokemon.component.html',
  styleUrls: ['./selected-pokemon.component.css']
})
export class SelectedPokemonComponent implements OnInit {
  tittle: string = '¡Ya casi términamos!';
  subtittle: string = 'Revisa la información, y completa lo solicitado.';
  tittleTable: string = 'Pokémon';
  subtittleTable: string = 'Selecciona 3 Pokémon para que sean parte de tu equipo';
  pokemons: any[] = [];
  searchResult: any = null;
  searchQuery: string = '';
  selectedPokemons: any[] = [];
  loading: boolean = false;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.listPokemons();
  }

  listPokemons() {
    this.pokemonService.getFirstNinePokemons().subscribe((data) => {
      this.pokemons = data;
      this.selectedPokemons = JSON.parse(sessionStorage.getItem('selectedPokemons') || '[]');
      this.updateSelectionStatus();
    });
  }

  onSearch(query: string): void {
    if (!query) {
      this.listPokemons();
      return;
    }

    this.pokemonService.searchPokemon(query.toLowerCase()).subscribe(
      (data) => {
        this.searchResult = {
          id: `#${String(data.id).padStart(3, '0')}`,
          name: data.name,
          imageUrl: data.sprites.front_default,
          stats: data.stats,
          types: data.types.map((types: any) => types.type.name)
        };
        this.pokemons = [this.searchResult];
        this.updateSelectionStatus();
      },
      (error) => {
        this.searchResult = null;
        this.pokemons = [];
      }
    );
  }

  toggleSelection(pokemon: any) {
    console.log("pokemon", pokemon);
    
    if (!pokemon) {
      return;
    }
  
    const exists = this.selectedPokemons.some(selected => selected.id === pokemon.id);
    if (this.selectedPokemons.length >= 3 && !exists) {
      return;
    }
  
    if (exists) {
      this.selectedPokemons = this.selectedPokemons.filter(selected => selected.id !== pokemon.id);
    } else {
      const maxStat = 200;
      const pokemonData = {
        id: pokemon.id,
        name: pokemon.name,
        imageUrl: pokemon.imageUrl,
        types: pokemon.types,
        stats: {
          hp: Math.round((pokemon.stats.find((s: any) => s.stat.name === 'hp').base_stat / maxStat) * 100),
          attack: Math.round((pokemon.stats.find((s: any) => s.stat.name === 'attack').base_stat / maxStat) * 100),
          defense: Math.round((pokemon.stats.find((s: any) => s.stat.name === 'defense').base_stat / maxStat) * 100),
          specialAttack: Math.round((pokemon.stats.find((s: any) => s.stat.name === 'special-attack').base_stat / maxStat) * 100),
          specialDefense: Math.round((pokemon.stats.find((s: any) => s.stat.name === 'special-defense').base_stat / maxStat) * 100),
          speed: Math.round((pokemon.stats.find((s: any) => s.stat.name === 'speed').base_stat / maxStat) * 100)
        }
      };
      this.selectedPokemons.push(pokemonData);
    }
  
    console.log("selectedPokemons", this.selectedPokemons);
    
    sessionStorage.setItem('selectedPokemons', JSON.stringify(this.selectedPokemons));
    this.updateSelectionStatus();
  }
  
  
  updateSelectionStatus() {
    this.pokemons.forEach(pokemon => {
      pokemon.isSelected = this.selectedPokemons.some(selected => selected.id === pokemon.id);
    });
  }
  
  nextPage() {
    const storedData = sessionStorage.getItem('data');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      parsedData.step = 2;
      sessionStorage.setItem('data', JSON.stringify(parsedData));
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/profile']);
      }, 1200);
    }
  }
}
