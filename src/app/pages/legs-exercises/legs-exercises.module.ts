import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegsExercisesPageRoutingModule } from './legs-exercises-routing.module';

import { LegsExercisesPage } from './legs-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegsExercisesPageRoutingModule
  ],
  declarations: [LegsExercisesPage]
})
export class LegsExercisesPageModule {}
