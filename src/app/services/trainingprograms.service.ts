import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Program{
  id: string,
  program_img:string,
  program_name:string,
  program_type: string,

}
export interface ProgramSplit{
  id: string,
  program_img:string,
  list_of_exercises:string,
  program_id: string,

}
export interface User{
  email: string,
  password:string,
 

}
@Injectable({
  providedIn: 'root'
})
export class TrainingprogramsService {
  private base_url="http://127.0.0.1/workshopis/";

  constructor(private http : HttpClient) { }
  getAllPrograms(){
    return this.http.get<[Program]>(this.base_url +"trainingprograms.php" )
  }
  getAllProgramSplits(){
    return this.http.get<[ProgramSplit]>(this.base_url +"programsplit.php")

  }
  createSession(user: User){
    return this.http.post(this.base_url +"login.php",user )

  }

}
