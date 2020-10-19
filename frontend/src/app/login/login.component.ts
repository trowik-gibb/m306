import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent{

    constructor(private router: Router){}

    login() {
        localStorage.setItem("login_token", "token");
        this.router.navigate(['home']);
    }
}