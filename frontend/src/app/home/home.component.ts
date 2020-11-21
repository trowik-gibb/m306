import { CreateFileuploadComponent } from '../create-fileuploud/create-fileupload.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {Component, Inject, OnInit} from '@angular/core';
import {CreateGroupComponent} from '../create-group/create-group.component';
import { FileModel } from '../models/file.interface';
import { Local } from 'protractor/built/driverProviders';
import { FileService } from '../services/files.service'
import {HttpClient} from "@angular/common/http";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscription: Subscription;
  files: Array<FileModel> = [];

  private PARKING_API = 'localhost:8080/allfiles';

  constructor(public modal: NgbModal,
    public modal2: NgbModal,
              private http: HttpClient,
    private fileService: FileService
  ) {
    this.fileService.getAllFiles().subscribe(data => console.log(data));
}

  ngOnInit(): void {
    this.subscription = this.fileService.getAllFiles().subscribe((files) => {
      console.log(files);
      this.files = files;
    });
  }

  loadModalFileUpload(): void {
    this.modal.open(CreateFileuploadComponent);
  }

  loadModalGroupCreate(): void{
    this.modal2.open(CreateGroupComponent);
  }


}
