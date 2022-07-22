import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './components/deck/deck.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: "deck", component: DeckComponent },
  { path: "details/:id", component: PokemonDetailsComponent },
  { path: "", component: PokemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
