import { Component, OnInit } from '@angular/core';
import { TrainingprogramsService, Program } from './../../services/trainingprograms.service';

@Component({
  selector: 'app-program-library',
  templateUrl: './program-library.page.html',
  styleUrls: ['./program-library.page.scss'],
})
export class ProgramLibraryPage implements OnInit {
  programs: Program[];

  constructor(private service: TrainingprogramsService) { }

  ngOnInit() {

    this.service.getAllPrograms().subscribe( response => {
      this.programs =response;
      console.log(this.programs);
      
  });

}

}
