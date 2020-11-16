import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FileModel} from '../models/file.interface';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  public file: FileModel;

  activeModal: NgbActiveModal;
  SERVER_URL = 'http://localhost:8000/newfile/';
  formGroupForm: FormGroup;


  constructor(activeModal: NgbActiveModal,
              private httpClient: HttpClient,
              private formBuilder: FormBuilder) {
    this.activeModal = activeModal;
  }

  ngOnInit(): void {
    this.formGroupForm = this.formBuilder.group({
      profile: ['']
    });
  }

  navigateBack(): void {
    this.activeModal.close();
    // this.location.back();
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('owner', '1');
    formData.append('type', '1');
    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
