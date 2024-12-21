import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SelectedPokemonComponent } from './components/selected-pokemon/selected-pokemon.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', component: ProfileFormComponent},
  {path: 'pokemon-selected', component: SelectedPokemonComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
