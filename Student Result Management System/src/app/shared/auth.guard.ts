import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService ,private route: Router){}
  canActivate()
  {
    if(this.auth.isUserLogedIn())
    {
      return true;
    }
    this.route.navigate(['login']);
    return false;

  }

  
}
