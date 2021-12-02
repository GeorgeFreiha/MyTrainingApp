import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmsExercisesPageRoutingModule } from './arms-exercises-routing.module';

import { ArmsExercisesPage } from './arms-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmsExercisesPageRoutingModule
  ],
  declarations: [ArmsExercisesPage]
})
export class ArmsExercisesPageModule {}
