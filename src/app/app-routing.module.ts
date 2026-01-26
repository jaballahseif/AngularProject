import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListSuggestionsComponent } from './list-suggestions/list-suggestions.component';

const routes: Routes = [
  { path: 'list-suggestions', component: ListSuggestionsComponent },
  { path: '', redirectTo: 'list-suggestions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
