import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { SignUpData } from "../auth/models/sign-up-data.interface";
import { AuthService } from "../auth/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "signup",
  templateUrl: "signup.component.html",
  styleUrls: ["signup.component.css"]
})
export class SignupComponent {

  form = this.fb.group({
    username: this.fb.control("", [Validators.required]),
    email: this.fb.control("", [Validators.required, Validators.email]),
    password: this.fb.control("", [Validators.required, Validators.minLength(8)]),
    passwordRep: this.fb.control("", [Validators.required])
  }, { validators: [this.checkPasswordMatch] })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private toatr: ToastrService) { }

  signup() {
    (<any>Object).values(this.form.controls).forEach(control => {
      control.markAsDirty();
    });
    if (this.form.valid) {
      if (this.form.value.password === this.form.value.passwordRep) {
        this.authService.signup(this.form.value).subscribe((data: any) => {
          this.authService.setToken(data.id);
          this.router.navigate(['home']);
          this.toatr.success("You have signed up successfully.", "Welcome");
        });
      }
      else {
        console.log("passwords don't match");
      }
    }
  }

  checkPasswordMatch(group: FormGroup) {
    let password = group.get('password').value;
    let passwordRep = group.get('passwordRep').value;

    if (password !== passwordRep) {
      group.get("passwordRep").setErrors({ "noMatch": true });
    }

    return;
  }
}
