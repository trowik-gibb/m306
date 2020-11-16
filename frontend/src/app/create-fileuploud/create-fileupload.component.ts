import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
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
  public state = false;
  public price: number;

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
      profile: [''],
      name: ['name'],
      price: [0.0]
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

  onSubmit(fileData: any): void {
    console.log(fileData.name);
    this.file.prize = fileData.price;
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('owner', '1');
    formData.append('state', this.state ? '1' : '0');
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

  public setPublic(): void {
   this.state = true;
   console.log(this.state);

  }

  public setPrivate(): void {
    this.state = false;
    console.log(this.state);

  }
}
