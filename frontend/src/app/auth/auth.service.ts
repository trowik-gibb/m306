import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUpData } from './models/sign-up-data.interface';
import { LoginData } from './models/login-data.interface';

const BACKEND_PATH = "http://localhost:8000";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    let token = localStorage.getItem("login_token");
    if (token) return true;
    return false;
  }

  public signup(signUpData: SignUpData) {
    const formData = new FormData();
    for (var key in signUpData) {
      formData.append(key, signUpData[key]);
    }
    return this.http.post(`${BACKEND_PATH}/register/`, formData);
  }

  public login(loginData: LoginData) {
    const formData = new FormData();
    formData.append("username", loginData.username);
    formData.append("password", loginData.password);
    return this.http.post(`${BACKEND_PATH}/login/`, formData);
  }

  public setToken(username: string) {
    localStorage.setItem("login_token", username);
  }
}
