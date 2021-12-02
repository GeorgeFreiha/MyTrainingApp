import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { MusclegroupComponent } from "./musclegroup/musclegroup.component";
import { ProgramComponent } from './program/program.component';



@NgModule({
    declarations: [InputComponent,MusclegroupComponent,ProgramComponent  ],
    exports: [InputComponent, MusclegroupComponent, ProgramComponent],
})
export class ComponentsModule{}