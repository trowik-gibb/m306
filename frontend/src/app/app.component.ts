import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./auth/auth.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';

  constructor(private router: Router,
    public authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private toastr: ToastrService
  ) {
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login'])
      this.toastr.success("You have been logged out.", "Success");
    });
  }

  getCartCount() {
    return this.shoppingCartService.getAmountInCart();
  }
}
