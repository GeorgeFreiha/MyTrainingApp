import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Program{
  id: string,
  program_img:string,
  program_name:string,
  program_type: string,

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

}
