import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { studentData } from './student.model';

@Component({
  selector: 'app-result-dash-bord',
  templateUrl: './result-dash-bord.component.html',
  styleUrls: ['./result-dash-bord.component.css']
})
export class ResultDashBordComponent implements OnInit {

  formValue !: FormGroup
  studentModelObj: studentData = new studentData;
  showAdd !: boolean;
  showBtn !: boolean;
 
  allStudentData:any;


  constructor(private formBuilder: FormBuilder, private api: ApiService , private router:Router ) { }
 
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Name: ['',[Validators.required,Validators.minLength(3)]],
      DOB:['',Validators.required],
      RollNo: ['',Validators.required],
      Marks: ['',[Validators.required,Validators.max(600)]]
    })
    this.getAllData();
  }
 
  clickAddStudent(){
    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;

  }
  addStudent() {    
    this.studentModelObj.id = this.formValue.value.RollNo;
    this.studentModelObj.Name = this.formValue.value.Name;
    this.studentModelObj.DOB = this.formValue.value.DOB;
    this.studentModelObj.RollNo = this.formValue.value.RollNo;
    this.studentModelObj.Marks = this.formValue.value.Marks;
    
    this.api.postStudent(this.studentModelObj).subscribe(res => {
      console.log(res);
      alert("Student Record added successfully 😁");
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    },
      err => {
        alert("Kuch tho gadbad hay 😡");
      })

  }
  //get all data
  getAllData() {
    this.api.getStudent().subscribe(res => {
      this.allStudentData = res;
    })
  }
  // deleting the student data
  deleteStudent(data:any){

    this.api.deleteStudent(data.id).subscribe(res=>{
      alert("Student Record Deleted Successfully");
      this.getAllData();// quick refresh
    })
  }
  onEditStudents(data:any){
    
      this.showAdd=false;
      this.showBtn=true;
      this.studentModelObj.id=data.RollNo
      this.formValue.controls['Name'].setValue(data.Name);
      this.formValue.controls['DOB'].setValue(data.DOB);
      this.formValue.controls['RollNo'].setValue(data.RollNo);
      this.formValue.controls['Marks'].setValue(data.Marks);

  }
  updateStudent(){
    this.studentModelObj.id = this.formValue.value.RollNo;
    this.studentModelObj.Name = this.formValue.value.Name;
    this.studentModelObj.DOB = this.formValue.value.DOB;
    this.studentModelObj.RollNo = this.formValue.value.RollNo;
    this.studentModelObj.Marks = this.formValue.value.Marks;

    this.api.updateStudent(this.studentModelObj,this.studentModelObj.id).subscribe(res=>{
      alert("Student Record Updated Sucesfully");
      let ref=document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();// quick refresh
    });
  }
  logout(){
    localStorage.removeItem('Email');
    this.router.navigate(['login']);
  }
}


