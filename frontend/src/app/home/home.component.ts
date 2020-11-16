import { CreateFileuploadComponent } from '../create-fileuploud/create-fileupload.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CreateGroupComponent} from '../create-group/create-group.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public modal: NgbModal,
              public modal2: NgbModal
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
