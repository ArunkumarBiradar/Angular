import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLogedIn() {
    return !!localStorage.getItem('Email');
  }

  isVaildStudent() {
    return !!localStorage.getItem('RollNo');
  }
}
