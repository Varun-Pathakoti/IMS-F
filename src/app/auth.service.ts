import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'https://localhost:7058/api/User/';
  private userPayload:any;
  constructor(private http: HttpClient, private router: Router) {

   }

  storeToken(tokenValue: string){
  localStorage.setItem('token', tokenValue)

}

  getToken(){
  return localStorage.getItem('token')
  }
  
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }
}