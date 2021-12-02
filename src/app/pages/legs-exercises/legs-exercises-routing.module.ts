import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegsExercisesPage } from './legs-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: LegsExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegsExercisesPageRoutingModule {}
