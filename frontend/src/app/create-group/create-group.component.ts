import {Component, Inject, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FileModel} from '../models/file.interface';
import {Group} from "../models/Group";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  public group: Group;
  public authService: AuthService;
  public activeModal: NgbActiveModal;
  public SERVER_URL = 'http://localhost:8000/group/new';
  public groupForm: FormGroup;


  constructor(@Inject(AuthService) authService, activeModal: NgbActiveModal,
              private httpClient: HttpClient,
              private formBuilder: FormBuilder) {
    this.activeModal = activeModal;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.groupForm = this.formBuilder.group({
      name: ['']
    });
  }

  navigateBack(): void {
    this.activeModal.close();
    // this.location.back();
  }

  onSubmit(groupData: any): void {
    this.group.creator = this.authService.getAuthenticatedUser();
    this.group.name = groupData.name;
    /*const formData = new FormData();
    formData.append('file', this.file);
    formData.append('owner', '1');
    formData.append('type', '1');
    */
    this.httpClient.post<Group>(this.SERVER_URL, this.group).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
