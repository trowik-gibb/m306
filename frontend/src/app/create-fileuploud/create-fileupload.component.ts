import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FileModel} from '../models/file.interface';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-fileupload.component.html',
  styleUrls: ['./create-fileupload.component.css']
})
export class CreateFileuploadComponent implements OnInit {

  // @Input() title: string;
  // @Input() subtitle: string;
  // @Input() confirmationText: string;
  // @Input() btnConfirmLabel: string;
  public file: FileModel;

  activeModal: NgbActiveModal;
  SERVER_URL = 'http://localhost:8000/newfile/';
  uploadForm: FormGroup;

  constructor(activeModal: NgbActiveModal,
              private location: Location,
              private formBuilder: FormBuilder,
              private httpClient: HttpClient
             ) {
    this.activeModal = activeModal;
  }


  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }


  handleSave(): void {
/*
      this.parkingLotService.createParkingLot(submittedParkingLot).subscribe(
        () => {
          this.toastrService.success(this.translateService.instant('parking-lot.form.toaster.created'));
        }, (response: HttpErrorResponse) => this.errors = response.error!.validationErrors as ValidationError[]
      );
 */
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

  onFileSelect(event): void {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
    }
  }
}