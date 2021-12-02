import { Component, OnInit } from '@angular/core';
import { TrainingprogramsService, Program } from './../../services/trainingprograms.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  programs: Program[];
  constructor(private service: TrainingprogramsService) {}

  ngOnInit() {

    this.service.getAllPrograms().subscribe( response => {
      this.programs =response;
      console.log(this.programs);
      
  });

}
}
