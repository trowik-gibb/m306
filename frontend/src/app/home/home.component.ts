import { CreateFileuploadComponent } from '../create-fileuploud/create-fileupload.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { CreateGroupComponent } from '../create-group/create-group.component';
import { FileModel } from '../models/file.interface';
import { Local } from 'protractor/built/driverProviders';
import { FileService } from '../services/files.service';
import { HttpClient } from '@angular/common/http';
import { Subscription, timer } from 'rxjs';
import { FileOptionsComponent } from '../file-options/file-options.component';
import { timeInterval } from 'rxjs/operators';
import { ShareService } from '../services/ShareService';
import { AuthService } from '../auth/auth.service';
import { ShareFilePerson } from '../models/ShareFilePerson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('optioncontainer', { read: ViewContainerRef }) container;
  subscription: Subscription;
  files: Array<FileModel> = [];
  sharedFiles: Array<ShareFilePerson>;
  choosenFile: FileModel;
  optionFactory: ComponentFactory<FileOptionsComponent>;
  opened: boolean;
  shareService: ShareService;

  private PARKING_API = 'localhost:8080/allfiles';

  constructor(@Inject(ShareService) shareService, public modal: NgbModal,
    public modal2: NgbModal,
    private http: HttpClient,
    private fileService: FileService,
    private resolver: ComponentFactoryResolver,
    private authService: AuthService
  ) {
    this.optionFactory = this.resolver.resolveComponentFactory(FileOptionsComponent);
    this.fileService.getAllFiles().subscribe(data => console.log(data));
    this.shareService = shareService;
  }

  ngOnInit(): void {
    this.fileService.fileChanged$.subscribe((value) => {
      if (this.files) {
        this.files = this.files.filter((file) => {
          return file !== value;
        });
      }
    });
    this.subscription = this.fileService.getAllFiles().subscribe((files) => {
      console.log(files);
      this.files = files;
      this.getSharedFiles();
    });
  }

  loadModalFileUpload(): void {
    this.modal.open(CreateFileuploadComponent);
  }

  loadModalGroupCreate(): void {
    this.modal2.open(CreateGroupComponent);
  }

  public getSharedFiles(): void {
    this.shareService.getSharedFiles(this.authService.getAuthenticatedUser()).subscribe((value) => {
      this.sharedFiles = value;
      if (this.sharedFiles.length > 0) {
        console.log(value);
        console.log('Eine Person hat mit dir Dateien geteilt');
        this.sharedFiles.forEach((sharedFile) => {
          this.files.forEach((file) => {
            if (file.id === sharedFile.file.id) {
              file.shared = true;
            }
          });
        });
      }
      console.log(this.files);
    });
  }

  public openOptions(file: FileModel): void {
    if (!this.opened || this.choosenFile !== file) {
      this.opened = true;
      let wait = 200;
      this.choosenFile = file;
      const interval = setInterval(() => {
        const component = this.container.createComponent(this.optionFactory);
        component.instance.file = this.choosenFile;
        wait -= wait;
        if (wait <= 0) {
          clearInterval(interval);
        }
      }, 200);
    }
  }
}
