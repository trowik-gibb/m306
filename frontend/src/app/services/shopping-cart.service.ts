import { Injectable } from "@angular/core";
import { FileModel } from "../models/file.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const BACKEND_PATH = "http://localhost:8000";

@Injectable()
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  public addFileToCart(id: number) {
    let cartContent: string = localStorage.getItem("cart-content");
    let ids: string[] = [];
    if (cartContent) {
      ids = cartContent.split(";");
    }
    if (!ids.find(item => +item === id)) {
      ids = [...ids, `${id}`];
    }
    cartContent = ids.join(";");
    localStorage.setItem("cart-content", cartContent);
  }

  public removeFileFromCart(id: number) {
    let cartContent: string = localStorage.getItem("cart-content");

    if (!cartContent) {
      return;
    }
    let ids = cartContent.split(";");
    ids = ids.filter(item => +item !== id)
    cartContent = ids.join(";");
    localStorage.setItem("cart-content", cartContent);
  }

  public isFileInCart(id: number): boolean {
    if (this.getFileIds().find(item => +item === id)) {
      return true;
    }
    return false;
  }

  public getFileIds(): string[] {
    let cartContent: string = localStorage.getItem("cart-content");
    if (cartContent) {
      return cartContent.split(";");
    }
    return [];
  }

  public getCartFiles(): Observable<FileModel[]> {
    let cartContent: string = localStorage.getItem("cart-content");
    const formData = new FormData();
    formData.append('ids', cartContent);
    return this.http.post<FileModel[]>(`${BACKEND_PATH}/cartfiles/`, formData);
  }
}
