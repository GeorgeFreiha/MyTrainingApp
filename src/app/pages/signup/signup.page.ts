import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingprogramsService, User} from './../../services/trainingprograms.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private service: TrainingprogramsService) { }

  ngOnInit() {

  }

}
