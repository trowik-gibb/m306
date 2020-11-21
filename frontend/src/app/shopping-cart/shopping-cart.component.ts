import { CreateFileuploadComponent } from '../create-fileuploud/create-fileupload.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { CreateGroupComponent } from '../create-group/create-group.component';
import { FileModel } from '../models/file.interface';
import { Local } from 'protractor/built/driverProviders';
import { FileService } from '../services/files.service'
import { ShoppingCartService } from '../services/shopping-cart.service'
import { HttpClient } from "@angular/common/http";
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  subscription: Subscription;
  files: Array<FileModel> = [];

  private PARKING_API = 'localhost:8080/allfiles';

  constructor(public modal: NgbModal,
    public modal2: NgbModal,
    private http: HttpClient,
    private fileService: FileService,
    private shoppingCartService: ShoppingCartService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.fileService.getAllFiles().subscribe((files) => {
      let ids = this.shoppingCartService.getFileIds();
      this.files = files.filter(file => ids.find(id => file.id === +id));
    });
  }

  onRemovedFromCart(id: number) {
    this.files = this.files.filter(file => file.id !== id);
  }

  getCartSum(): number {
    let sum = 0;
    this.files.map(file => sum += file.price);
    return sum;
  }


}
