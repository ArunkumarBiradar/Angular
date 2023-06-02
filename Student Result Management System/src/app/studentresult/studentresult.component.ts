import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StudentresultService } from '../shared/studentresult.service';

@Component({
  selector: 'app-studentresult',
  templateUrl: './studentresult.component.html',
  styleUrls: ['./studentresult.component.css']
})
export class StudentresultComponent {
constructor(public _studentResult:StudentresultService, private router: Router){}
back(){
  localStorage.removeItem('RollNo');
  this.router.navigate(['studentresultsearch']);
}
home(){
  localStorage.removeItem('RollNo');
  this.router.navigate(['main']);
}
}
