import {CreateFileuploadComponent} from '../create-fileuploud/create-fileupload.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CreateGroupComponent} from '../create-group/create-group.component';
import {FileModel} from '../models/file.interface';
import {Local} from 'protractor/built/driverProviders';
import {FileService} from '../services/files.service'
import {HttpClient} from "@angular/common/http";
import {Subscription, timer} from 'rxjs';
import {FileOptionsComponent} from "../file-options/file-options.component";
import {FindPersonComponent} from "../find-person/find-person.component";
import {timeInterval} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('optioncontainer', {read: ViewContainerRef}) container;
  subscription: Subscription;
  files: Array<FileModel> = [];
  choosenFile: FileModel;
  optionFactory: ComponentFactory<FileOptionsComponent>;
  opened: boolean;

  private PARKING_API = 'localhost:8080/allfiles';

  constructor(public modal: NgbModal,
              public modal2: NgbModal,
              private http: HttpClient,
              private fileService: FileService,
              private resolver: ComponentFactoryResolver
  ) {
    this.optionFactory = this.resolver.resolveComponentFactory(FileOptionsComponent);
    this.fileService.getAllFiles().subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    this.subscription = this.fileService.getAllFiles().subscribe((files) => {
      console.log(files);
      this.files = files;
    });
  }

  loadModalFileUpload(): void {
    this.modal.open(CreateFileuploadComponent);
  }

  loadModalGroupCreate(): void {
    this.modal2.open(CreateGroupComponent);
  }


  public openOptions(file: FileModel): void {
    if (!this.opened || this.choosenFile !== file) {
      this.opened = true;
      let wait = 500;
      this.choosenFile = file;
      const interval = setInterval(() => {
        const component = this.container.createComponent(this.optionFactory);
        component.instance.file = this.choosenFile;
        wait -= wait;
        if (wait === 0) {
          clearInterval(interval);
        }
      }, 500);
    }
  }
}
