import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemos-details',
  templateUrl: './pokemos-details.component.html',
  styleUrls: ['./pokemos-details.component.css']
})
export class PokemosDetailsComponent implements OnInit{
  pokemonList: any[] = [];
  typeColors: { [key: string]: string } = {
    fire: '#f44336',
    water: '#2196f3',
    grass: '#4caf50',
    electric: '#ffeb3b',
    bug: '#8bc34a',
    normal: '#9e9e9e',
    psychic: '#9c27b0',
    ghost: '#800080',
    ice: '#00BFFF'
  };

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('selectedPokemons');
    if (storedData) {
      this.pokemonList = JSON.parse(storedData);
    }
  }

  getStats(pokemon: any) {
    return [
      { label: 'HP', value: pokemon.stats.hp },
      { label: 'Ataque', value: pokemon.stats.attack },
      { label: 'Defensa', value: pokemon.stats.defense },
      { label: 'Ataque Especial', value: pokemon.stats.specialAttack },
      { label: 'Defensa Especial', value: pokemon.stats.specialDefense },
      { label: 'Velocidad', value: pokemon.stats.speed }
    ];
  }

  getTypeColor(type: string): string {
    return this.typeColors[type] || '#76c893';
  }
  
}
