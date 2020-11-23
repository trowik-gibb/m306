import { Component, OnInit } from '@angular/core';
import { CreateFileuploadComponent } from "../create-fileuploud/create-fileupload.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateGroupComponent } from "../create-group/create-group.component";
import { GroupService } from "../services/group-service";
import { Group } from "../models/Group";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-page-three',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {
  groups: Array<Group> = [];
  constructor(public modal2: NgbModal, private groupService: GroupService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.groupService.getAllGroups().subscribe((value) => {
    //  this.groups = value;
    //});
    this.toastr.warning("This component has not been fully implemented.", "Warning");
  }

  loadModalGroupCreate(): void {
    this.modal2.open(CreateGroupComponent);
  }
}
