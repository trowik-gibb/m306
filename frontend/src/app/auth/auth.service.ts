import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUpData } from './models/sign-up-data.interface';
import { LoginData } from './models/login-data.interface';

const BACKEND_PATH = 'http://localhost:8000';

@Injectable()
export class AuthService {
  headers: Headers

  constructor(private http: HttpClient) {

    this.headers = new Headers();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('user');
    if (token) { return true; }
    return false;
  }

  public signup(signUpData: SignUpData) {
    const formData = new FormData();
    for (const key in signUpData) {
      formData.append(key, signUpData[key]);
    }
    return this.http.post(`${BACKEND_PATH}/register/`, formData);
  }

  public login(loginData: LoginData) {
    const formData = new FormData();
    formData.append('username', loginData.username);
    formData.append('password', loginData.password);
    return this.http.post(`${BACKEND_PATH}/login/`, formData);
  }

  public setToken(userid: number): void {
    localStorage.setItem('user', String(userid));
  }

  public getUserId(): string {
    return localStorage.getItem('user');
  }

  public getAuthenticatedUser(): number{
    return +localStorage.getItem('user');
  }

  public logout() {
    localStorage.removeItem('user');
    return this.http.post(`${BACKEND_PATH}/logout/`, null);
  }
}
