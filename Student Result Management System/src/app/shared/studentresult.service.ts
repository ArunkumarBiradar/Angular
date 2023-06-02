import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentresultService {

  public Name:string='';
  public RollNo:number=0;
  public Marks:number=0;
  public DOB:string='';

  constructor() { }
}
