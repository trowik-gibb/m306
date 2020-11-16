import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';

  constructor(private router: Router,
    private authService: AuthService
  ) {
  }

  logout() {
    localStorage.removeItem('login_token');
    this.router.navigate(['login']);
  }
}
