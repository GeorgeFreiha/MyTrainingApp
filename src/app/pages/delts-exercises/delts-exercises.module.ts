import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeltsExercisesPageRoutingModule } from './delts-exercises-routing.module';

import { DeltsExercisesPage } from './delts-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeltsExercisesPageRoutingModule
  ],
  declarations: [DeltsExercisesPage]
})
export class DeltsExercisesPageModule {}
