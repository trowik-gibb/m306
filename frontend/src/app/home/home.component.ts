import { CreateFileuploadComponent } from '../create-fileuploud/create-fileupload.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FileModel } from '../models/file.interface';
import { FileService } from '../services/files.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FileOptionsComponent } from '../file-options/file-options.component';
import { ShareService } from '../services/ShareService';
import { AuthService } from '../auth/auth.service';
import { ShareFilePerson } from '../models/ShareFilePerson';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('optioncontainer', { read: ViewContainerRef }) container;
  subscription: Subscription;
  ownFiles: Array<FileModel>;
  sharedFiles: Array<ShareFilePerson>;
  choosenFile: FileModel;
  optionFactory: ComponentFactory<FileOptionsComponent>;
  opened: boolean;
  shareService: ShareService;
  activePage = 1;

  constructor(@Inject(ShareService) shareService, public modal: NgbModal,
    public modal2: NgbModal,
    private http: HttpClient,
    private fileService: FileService,
    private resolver: ComponentFactoryResolver,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.optionFactory = this.resolver.resolveComponentFactory(FileOptionsComponent);
    this.fileService.getAllFiles().subscribe(data => console.log(data));
    this.shareService = shareService;
  }

  ngOnInit(): void {
    this.fileService.fileChanged$.subscribe((value) => {
      if (this.ownFiles) {
        this.ownFiles = this.ownFiles.filter((file) => {
          return file.id !== value.id;
        });
      }
    });
    this.subscription = this.fileService.getUsersFiles().subscribe((files: FileModel[]) => {
      console.log(files);
      this.ownFiles = files;
      this.getSharedFiles();
    });
    console.log(this.ownFiles);
  }

  loadModalFileUpload(): void {
    let modalRef = this.modal.open(CreateFileuploadComponent);
    modalRef.componentInstance.fileUploaded.subscribe(newFile => {
      this.ownFiles = [...this.ownFiles, newFile];
      this.toastr.success("File uploaded.", "Success");
    })
  }

  public getSharedFiles(): void {
    this.shareService.getSharedFiles(this.authService.getAuthenticatedUser()).subscribe((value) => {
      this.sharedFiles = value;
      if (this.sharedFiles.length > 0) {
        console.log(value);
        console.log('Eine Person hat mit dir Dateien geteilt');
      }
    });
  }
}
