import { Component, Input, Output, EventEmitter } from "@angular/core";

import { FileModel } from "../../models/file.interface";
import { AuthService } from "../../auth/auth.service";
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  selector: "file-element",
  templateUrl: "file.component.html",
  styleUrls: ["file.component.css"]
})
export class FileComponent {
  @Input()
  file: FileModel;

  @Output()
  removedFromCart: EventEmitter<{}> = new EventEmitter<{}>()

  constructor(
    public authService: AuthService,
    private shoppingCartService: ShoppingCartService) {
  }

  isOwn(ownerId: number) {
    return this.authService.getUserId() === String(ownerId)
  }

  addToCart(id: number) {
    this.shoppingCartService.addFileToCart(id);
    console.log(this.shoppingCartService.getFileIds());
  }

  removeFromCart(id: number) {
    this.shoppingCartService.removeFileFromCart(id);
    console.log(this.shoppingCartService.getFileIds());
    this.removedFromCart.emit();
  }

  isInCart(id: number) {
    return this.shoppingCartService.isFileInCart(id);
  }
}
