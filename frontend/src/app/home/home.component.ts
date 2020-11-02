import { CreateModalComponent } from './../create-modal/create-modal.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              public modal: NgbModal) {
}

  ngOnInit(): void {
  }

  loadModal(){
    const modalRef = this.modal.open(CreateModalComponent);
    modalRef.componentInstance.titel = 'test';
  }


}
