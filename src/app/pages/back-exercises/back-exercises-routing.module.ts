import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackExercisesPage } from './back-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: BackExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackExercisesPageRoutingModule {}
