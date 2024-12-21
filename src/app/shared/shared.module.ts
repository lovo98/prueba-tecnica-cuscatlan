import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './loading/loading.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { FormsModule } from '@angular/forms';
import { PokemosDetailsComponent } from './pokemos-details/pokemos-details.component';


@NgModule({
  declarations: [
    TitleComponent,
    PhotoCardComponent,
    LoadingComponent,
    InputSearchComponent,
    PokemonCardComponent,
    PokemosDetailsComponent
  ],
  exports:[
    CommonModule,
    TitleComponent,
    PhotoCardComponent,
    LoadingComponent,
    InputSearchComponent,
    PokemonCardComponent,
    PokemosDetailsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class SharedModule { }
