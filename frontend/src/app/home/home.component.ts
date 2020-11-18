import {CreateFileuploadComponent} from '../create-fileuploud/create-fileupload.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Component, OnInit} from '@angular/core';
import {CreateGroupComponent} from '../create-group/create-group.component';
import { FileModel } from '../models/file.interface';
import { Local } from 'protractor/built/driverProviders';
import { FileService } from '../services/files.service'
import {HttpClient} from "@angular/common/http";

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
    text: null,
    public: true
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
      text: null,
      public: true
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
      text: null,
      public: true
    }];

  private PARKING_API = 'localhost:8080/allfiles';

  constructor(public modal: NgbModal,
    public modal2: NgbModal,
              private http: HttpClient,
    private fileService: FileService
  ) {
    this.fileService.getUsersFiles().subscribe(data => console.log(data));
}

  ngOnInit(): void {
  }

  loadModalFileUpload(): void {
    this.modal.open(CreateFileuploadComponent);
  }

  loadModalGroupCreate(): void {
    this.modal2.open(CreateGroupComponent);
  }

  getAllParkingLots() {
    return this.http.get(`${(this.PARKING_API)}`);
  }


}
