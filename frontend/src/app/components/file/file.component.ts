import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FileModel } from '../../models/file.interface';
import { AuthService } from '../../auth/auth.service';
import { FileModel } from "../../models/file.interface";
import { AuthService } from "../../auth/auth.service";
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  selector: 'app-file-element',
  templateUrl: 'file.component.html',
  styleUrls: ['file.component.css']
})
export class FileComponent {
  @Input() file: FileModel;
  @Output() openOptionsM: EventEmitter<FileModel>;

  @Output()
  removedFromCart: EventEmitter<{}> = new EventEmitter<{}>()

  constructor(public authService: AuthService, private shoppingCartService: ShoppingCartService) {
    this.openOptionsM = new EventEmitter();
  }

  isOwn(ownerId: number): boolean {
    return this.authService.getUserId() === String(ownerId);
  }
  public openOptions(): void {
    this.openOptionsM.emit(this.file);
  }
  public addToCart(id: number): void {
    this.shoppingCartService.addFileToCart(id);
    console.log(this.shoppingCartService.getFileIds());
  }

  public removeFromCart(id: number): void {
    this.shoppingCartService.removeFileFromCart(id);
    console.log(this.shoppingCartService.getFileIds());
    this.removedFromCart.emit();
  }

  public isInCart(id: number): boolean {
    return this.shoppingCartService.isFileInCart(id);
  }
}
