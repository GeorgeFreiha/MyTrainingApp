import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmsExercisesPage } from './arms-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: ArmsExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmsExercisesPageRoutingModule {}
