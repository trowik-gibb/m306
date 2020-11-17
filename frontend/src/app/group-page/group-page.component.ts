import { Component, OnInit } from '@angular/core';
import {CreateFileuploadComponent} from "../create-fileuploud/create-fileupload.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateGroupComponent} from "../create-group/create-group.component";

@Component({
  selector: 'app-page-three',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {

  constructor(public modal2: NgbModal) { }

  ngOnInit(): void {
  }

  loadModalGroupCreate(): void{
    this.modal2.open(CreateGroupComponent);
  }
}
