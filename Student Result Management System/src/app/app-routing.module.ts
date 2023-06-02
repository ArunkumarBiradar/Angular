import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResultDashBordComponent } from './result-dash-bord/result-dash-bord.component';
import { AuthguardforstudentGuard } from './shared/authguardforstudent.guard';
import { AuthguardforteacherGuard } from './shared/authguardforteacher.guard';
import { SignupComponent } from './signup/signup.component';
import { StudentresultComponent } from './studentresult/studentresult.component';
import { StudentresultdashboardComponent } from './studentresultdashboard/studentresultdashboard.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: MaindashboardComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'studentresultsearch', component: StudentresultdashboardComponent
  },
  {
    path: 'studentresult', component: StudentresultComponent,canActivate:[AuthguardforstudentGuard]
  },
  {
    path: 'signup', component: SignupComponent,canActivate:[AuthguardforteacherGuard]
  },

  { 
    path: 'result', component: ResultDashBordComponent ,canActivate:[AuthguardforteacherGuard]
  },
  { 
    path: '**', component: PagenotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
