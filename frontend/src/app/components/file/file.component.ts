import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileModel } from '../../models/file.interface';
import { AuthService } from '../../auth/auth.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ToastrService, Toast } from "ngx-toastr";

@Component({
  selector: 'app-file-element',
  templateUrl: 'file.component.html',
  styleUrls: ['file.component.css']
})
export class FileComponent {
  @Input() file: FileModel;

  @Output()
  removedFromCart: EventEmitter<{}> = new EventEmitter<{}>();

  showOptions = false;

  constructor(
    public authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private toastr: ToastrService) {
  }

  isOwn(ownerId: number): boolean {
    return this.authService.getUserId() === String(ownerId);
  }

  public addToCart(id: number): void {
    this.shoppingCartService.addFileToCart(id);
    console.log(this.shoppingCartService.getFileIds());
  }

  public removeFromCart(id: number): void {
    this.shoppingCartService.removeFileFromCart(id);
    this.toastr.success("The file was removed from your cart.", "Success");
    this.removedFromCart.emit();
  }

  public isInCart(id: number): boolean {
    return this.shoppingCartService.isFileInCart(id);
  }

  public getSizeInKB(): number {
    return Math.ceil(this.file.size / 1024);
  }

  public isImage(): boolean {
    let type = this.file.type.type;
    return type.toLowerCase().includes("image");
  }
}
