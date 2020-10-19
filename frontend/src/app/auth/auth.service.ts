import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    
    public isAuthenticated(): boolean {
        let token = localStorage.getItem("login_token");
        return false;
    }
}