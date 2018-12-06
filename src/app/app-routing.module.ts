import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OfListComponent} from './of-list/of-list.component';

const routes: Routes = [
  {
    path: '',
    component: OfListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
