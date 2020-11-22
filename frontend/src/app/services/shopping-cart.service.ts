import { Injectable } from "@angular/core";
import { FileModel } from "../models/file.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { ToastrService } from "ngx-toastr"

const BACKEND_PATH = "http://localhost:8000";

@Injectable()
export class ShoppingCartService {

  constructor(private http: HttpClient,
    private authService: AuthService,
    private toastr: ToastrService) { }

  public addFileToCart(id: number) {
    let cartContent: string = localStorage.getItem(this.getItemName());
    let ids: string[] = [];
    if (cartContent) {
      ids = cartContent.split(";");
    }
    if (ids.length < 10) {
      if (!ids.find(item => +item === id)) {
        ids = [...ids, `${id}`];
      }
      else {
        this.toastr.error("The selected file is already in your cart.", "File already in cart")
      }
      cartContent = ids.join(";");
      localStorage.setItem(this.getItemName(), cartContent);
    }
    else {
      this.toastr.error("You can only put 10 items in your cart.", "Cart is full")
    }
  }

  public removeFileFromCart(id: number) {
    let cartContent: string = localStorage.getItem(this.getItemName());

    if (!cartContent) {
      return;
    }
    let ids = cartContent.split(";");
    ids = ids.filter(item => +item !== id)
    cartContent = ids.join(";");
    localStorage.setItem(this.getItemName(), cartContent);
  }

  public emptyCart() {
    localStorage.removeItem(this.getItemName())
  }

  public isFileInCart(id: number): boolean {
    if (this.getFileIds().find(item => +item === id)) {
      return true;
    }
    return false;
  }

  public getFileIds(): string[] {
    let cartContent: string = localStorage.getItem(this.getItemName());
    if (cartContent) {
      return cartContent.split(";");
    }
    return [];
  }

  public getCartFiles(): Observable<FileModel[]> {
    let cartContent: string = localStorage.getItem(this.getItemName());
    const formData = new FormData();
    formData.append('ids', cartContent);
    return this.http.post<FileModel[]>(`${BACKEND_PATH}/cartfiles/`, formData);
  }

  public getAmountInCart() {
    return this.getFileIds().length;
  }

  private getItemName() {
    return "cart-content-" + this.authService.getUserId();
  }
}
