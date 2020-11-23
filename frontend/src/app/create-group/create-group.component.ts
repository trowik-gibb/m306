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
  public SERVER_URL = 'http://localhost:8000/newgroup/';
  public groupForm: FormGroup;


  constructor(@Inject(AuthService) authService, activeModal: NgbActiveModal,
              private httpClient: HttpClient,
              private formBuilder: FormBuilder,
             ) {
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
    const formData = new FormData();
    formData.append('creator', String(this.authService.getAuthenticatedUser()));
    formData.append('name', groupData.name);
    this.httpClient.post<Group>(this.SERVER_URL, formData).subscribe(
      (res) => {
        if (res){
          this.activeModal.close();
        }
      },
      (err) => console.log(err)
    );
  }

}
