import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeltsExercisesPage } from './delts-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: DeltsExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeltsExercisesPageRoutingModule {}
