import { Component, Input, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileModel } from '../models/file.interface';
import { FindPersonComponent } from '../find-person/find-person.component';
import { FileService } from "../services/files.service";
import { ShoppingCartService } from "../services/shopping-cart.service";
import { Subject } from "rxjs";
import { ToastrService, Toast } from "ngx-toastr";

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-file-options',
  templateUrl: './file-options.component.html',
  styleUrls: ['./file-options.component.css']
})
export class FileOptionsComponent implements OnInit, OnChanges {
  @ViewChild('shareModal')
  shareModal;

  options: string[];

  @Input()
  file: FileModel;

  fileChanged: Subject<FileModel>;
  constructor(private dialog: MatDialog, private fileService: FileService, private cartService: ShoppingCartService,
    private modalService: NgbModal,
    private toastr: ToastrService) {
  }

  ngOnChanges() {
    if (this.file) {
      this.options = ['Edit File', 'Delete File']
      if (!this.file.public) {
        this.options = [...this.options, 'Share File'];
      }
      this.fileChanged = new Subject<FileModel>();
    }
  }

  ngOnInit(): void {
  }

  public dispatchAction(action: string): void {
    switch (action) {
      case 'Share File':
        this.openDialogFindPersonC();
        break;
      case 'Edit File':
        this.toastr.warning("This function has not yet been implemented.", "Warning");
        break;
      case 'Delete File':
        this.deletFile(this.file);
        break;
    }
  }
  public openDialogFindPersonC(): void {
    const modalRef = this.modalService.open(FindPersonComponent);
    modalRef.componentInstance.file = this.file;
  }

  private deletFile(file: FileModel): void {
    this.fileService.deleteFile(file.id).subscribe((value) => {
      const file$ = value;
      if (file$) {
        this.cartService.removeFileFromCart(value.id);
        console.log('Datei gelöscht');
        this.toastr.success("File was deleted.", "Success")
      }
    });
  }
}
