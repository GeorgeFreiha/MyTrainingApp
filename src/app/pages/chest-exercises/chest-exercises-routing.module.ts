import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChestExercisesPage } from './chest-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: ChestExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChestExercisesPageRoutingModule {}
