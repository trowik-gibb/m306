import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

import { SignUpData } from "../auth/models/sign-up-data.interface";
import { AuthService } from "../auth/auth.service";

@Component({
    selector:"signup",
    templateUrl: "signup.component.html",
    styleUrls: ["signup.component.css"]
})
export class SignupComponent{

    form = this.fb.group({
      username: this.fb.control(""),
      email: this.fb.control(""),
      password: this.fb.control(""),
      passwordRep: this.fb.control("")
    })    

    constructor(
      private router: Router,
      private fb: FormBuilder,
      private authService: AuthService){}

  signup() {
    if (this.form.value.password === this.form.value.passwordRep) {
      this.authService.signup(this.form.value).subscribe((data) =>  console.log(data));
    }
    else {
      console.log("passwords don't match");
    }
        //this.router.navigate(['home']);
    }
}
