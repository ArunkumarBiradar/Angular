import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { StudentresultService } from '../shared/studentresult.service';

@Component({
  selector: 'app-studentresultdashboard',
  templateUrl: './studentresultdashboard.component.html',
  styleUrls: ['./studentresultdashboard.component.css']
})
export class StudentresultdashboardComponent {
studentResultSearchForm!:FormGroup;
 studentRollNo=0;
constructor(private formBuilder:FormBuilder , private _http:HttpClient,private router:Router,private api: ApiService, private _studentResult:StudentresultService){
  
}
StudentData:any;

  ngOnInit(): void {
    this.studentResultSearchForm=this.formBuilder.group({
      RollNo:['',Validators.required],
      DOB:['',Validators.required]
    })
  }
  studentResultSearch(){
    
    this._http.get<any>("http://localhost:3000/posts").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.RollNo === this.studentResultSearchForm.value.RollNo && a.DOB ===this.studentResultSearchForm.value.DOB
      })
      if(user){
        this.studentRollNo=this.studentResultSearchForm.value.RollNo
        this._http.get<any>("http://localhost:3000/posts/"+this.studentRollNo).subscribe(res=>{
        this.StudentData=res;
      })
      this._studentResult.Name= this.StudentData.Name;
      this._studentResult.DOB= this.StudentData.DOB;
      this._studentResult.Marks= this.StudentData.Marks;
      this._studentResult.RollNo= this.StudentData.RollNo;
      localStorage.setItem('RollNo',this.studentResultSearchForm.value.RollNo)
        alert("Result is ready");
        this.router.navigate(['studentresult'])
      }
      else{
        alert("Invalid student credential !!")
       
      }
      this.studentResultSearchForm.reset();
    },
    err=>{
      alert("Something Went Wrong Server side !!")
    })
  }
  
}


