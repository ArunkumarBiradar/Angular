import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultDashBordComponent } from './result-dash-bord/result-dash-bord.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { StudentresultdashboardComponent } from './studentresultdashboard/studentresultdashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentresultComponent } from './studentresult/studentresult.component';



@NgModule({
  declarations: [
    AppComponent,
    ResultDashBordComponent,
    LoginComponent,
    SignupComponent,
    MaindashboardComponent,
    StudentresultdashboardComponent,
    PagenotfoundComponent,
    StudentresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
