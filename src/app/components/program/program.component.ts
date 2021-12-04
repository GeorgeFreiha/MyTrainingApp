import { Component, OnInit, Input } from '@angular/core';
import {
  TrainingprogramsService,
  Program,
  ProgramSplit,
} from './../../services/trainingprograms.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  programsplit: ProgramSplit[];

  programs: Program[];
  constructor(private service: TrainingprogramsService) {}

  ngOnInit() {
    this.service.getAllPrograms().subscribe((response) => {
      this.programs = response;
      console.log(this.programs);
    });
    this.service.getAllProgramSplits().subscribe((response) => {
      this.programsplit = response;
      console.log(this.programsplit);
    });
  }
}
