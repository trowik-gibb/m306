import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

import { LoginData } from "../auth/models/login-data.interface";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})
export class LoginComponent {

  form = this.fb.group({
    username: this.fb.control("", [Validators.required]),
    password: this.fb.control("", [Validators.required])
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

  login() {
    (<any>Object).values(this.form.controls).forEach(control => {
      control.markAsDirty();
    });
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe((data: LoginData) => {
        this.authService.setToken(data.username);
        this.router.navigate(['home']);
      });
      this.router.navigate(['home']);
    }
  }
}
