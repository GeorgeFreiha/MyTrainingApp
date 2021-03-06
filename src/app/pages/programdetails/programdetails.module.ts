import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramdetailsPageRoutingModule } from './programdetails-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { ProgramdetailsPage } from './programdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProgramdetailsPageRoutingModule
  ],
  declarations: [ProgramdetailsPage]
})
export class ProgramdetailsPageModule {}
