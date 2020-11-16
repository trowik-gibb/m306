import { CreateFileuploadComponent } from '../create-fileuploud/create-fileupload.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CreateGroupComponent} from '../create-group/create-group.component';
import { FileModel } from '../models/file.interface';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  files: FileModel[] = [{
    type: "pdf",
    name: "dsfjk.pdf",
    owner: "user2",
    size: 6,
    prize: 19,
    lastModified: null,
    arrayBuffer: null,
    slice: null,
    stream: null,
    text: null
  }, {
      type: "pdf",
      name: "dsfjk.pdf",
      owner: "user1",
      size: 6,
      prize: 19,
      lastModified: null,
      arrayBuffer: null,
      slice: null,
      stream: null,
      text: null
    },
    {
      type: "pdf",
      name: "dsfjk.pdf",
      owner: "user2",
      size: 6,
      prize: 19,
      lastModified: null,
      arrayBuffer: null,
      slice: null,
      stream: null,
      text: null
    }];

  constructor(public modal: NgbModal,
    public modal2: NgbModal,
              ) {
}

  ngOnInit(): void {
  }

  loadModalFileUpload(): void{
    this.modal.open(CreateFileuploadComponent);
  }

  loadModalGroupCreate(): void{
    this.modal2.open(CreateGroupComponent);
  }


}
