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
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent implements OnInit {
  subscription: Subscription;
  files: Array<FileModel>;
  filteredFiles: Array<FileModel>;
  sharedFiles: Array<ShareFilePerson>;
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
    this.shareService = shareService;
  }

  ngOnInit(): void {
    this.fileService.fileChanged$.subscribe((value) => {
      if (this.files) {
        this.files = this.files.filter((file) => {
          return file.id !== value.id;
        });
        this.filteredFiles = this.files.filter((file) => {
          return file.id !== value.id;
        });
      }
    });
    this.subscription = this.fileService.getAllFiles().subscribe((files: FileModel[]) => {
      console.log(files);
      this.files = files;
    });
    console.log(this.files);
  }

  getFiles() {
    if (this.filteredFiles) {
      return this.filteredFiles;
    }
    else {
      return this.files;
    }
  }

  filterFiles(searchText: string) {
    if (searchText) {
      this.filteredFiles = this.files.filter(f => f.name.toLowerCase().includes(searchText));
    }
    else {
      this.filteredFiles = undefined;
    }
  }
}
