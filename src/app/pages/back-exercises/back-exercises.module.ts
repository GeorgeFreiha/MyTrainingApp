import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackExercisesPageRoutingModule } from './back-exercises-routing.module';

import { BackExercisesPage } from './back-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackExercisesPageRoutingModule
  ],
  declarations: [BackExercisesPage]
})
export class BackExercisesPageModule {}
