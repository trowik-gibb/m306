import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  Component,
  OnInit,
} from '@angular/core';
import { FileModel } from '../models/file.interface';
import { FileService } from '../services/files.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent implements OnInit {
  subscription: Subscription;
  files: Array<FileModel>;
  filteredFiles: Array<FileModel>;
  opened: boolean;

  constructor(public modal: NgbModal,
    public modal2: NgbModal,
    private fileService: FileService,
  ) {
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
