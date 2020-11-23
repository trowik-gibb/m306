import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FileModel} from '../models/file.interface';
import {FindPersonComponent} from '../find-person/find-person.component';
import {FileService} from "../services/files.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-file-options',
  templateUrl: './file-options.component.html',
  styleUrls: ['./file-options.component.css']
})
export class FileOptionsComponent implements OnInit {
  options = ['Datei teilen', 'Datei bearbeiten', 'Datei löschen'];
  file: FileModel = null;
  fileChanged: Subject<FileModel>;
  constructor(private dialog: MatDialog, private fileService: FileService) {
    this.fileChanged = new Subject<FileModel>();
  }

  ngOnInit(): void {
  }

  public dispatchAction(action: string): void{
    switch (action) {
      case 'Datei teilen':
        this.openDialogFindPersonC();
        break;
      case 'Datei löschen':
        this.deletFile(this.file);
    }
  }
  public openDialogFindPersonC(): void {
    this.dialog.open(FindPersonComponent, {width: '50%', height: '60%', data: this.file});
  }

  private deletFile(file: FileModel): void {
    debugger;
    this.fileService.deleteFile(file.id).subscribe((value) => {
      const file$ = value;
      if (file$.id){
        console.log('Datei gelöscht');
      }
    });
  }
}
