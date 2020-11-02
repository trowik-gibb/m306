import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() confirmationText: string;
  @Input() btnConfirmLabel: string;

  activeModal: NgbActiveModal;

  constructor(activeModal: NgbActiveModal,
              private location: Location,
             ) {
    this.activeModal = activeModal;
  }


  ngOnInit(): void {
  }


  handleSave() {
/*
      this.parkingLotService.createParkingLot(submittedParkingLot).subscribe(
        () => {
          this.toastrService.success(this.translateService.instant('parking-lot.form.toaster.created'));
        }, (response: HttpErrorResponse) => this.errors = response.error!.validationErrors as ValidationError[]
      );
 */
    }

  navigateBack() {
    this.activeModal.close();
     // this.location.back();
  }

}
