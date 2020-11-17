import {CreateFileuploadComponent} from '../create-fileuploud/create-fileupload.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Component, OnInit} from '@angular/core';
import {CreateGroupComponent} from '../create-group/create-group.component';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  private  PARKING_API = 'localhost:8080/allfiles';



  constructor(public modal: NgbModal,
              public modal2: NgbModal,
              private http: HttpClient,
  ) {}

  ngOnInit(): void {
  }

  loadModalFileUpload(): void {
    this.modal.open(CreateFileuploadComponent);
  }

  loadModalGroupCreate(): void {
    this.modal2.open(CreateGroupComponent);
  }

  getAllParkingLots() {
    return this.http.get(`${(this.PARKING_API)}`);
  }


}
