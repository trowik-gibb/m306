import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUpData } from './models/sign-up-data.interface';

const BACKEND_PATH = "http://localhost:8000";

@Injectable()
export class AuthService {

    constructor (private http: HttpClient ){}
    
    public isAuthenticated(): boolean {
        let token = localStorage.getItem("login_token");
        if (token) return true;
        return false;
    }

  public signup(signUpData: SignUpData) {
    return this.http.post(`${BACKEND_PATH}/register/`, signUpData);
        console.log(signUpData);
        //this.http.put('path', signUpData)
    }
}
