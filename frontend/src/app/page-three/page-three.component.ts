import { Component, OnInit } from '@angular/core';
import {CreateFileuploadComponent} from "../create-fileuploud/create-fileupload.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }
  loadModal(): void{
    this.modal.open(CreateFileuploadComponent);
  }

}
