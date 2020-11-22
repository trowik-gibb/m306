import {Component, EventEmitter, Input, Output} from '@angular/core';

import { FileModel } from '../../models/file.interface';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-file-element',
  templateUrl: 'file.component.html',
  styleUrls: ['file.component.css']
})
export class FileComponent {
  @Input() file: FileModel;
  @Output() openOptionsM: EventEmitter<FileModel>;

  constructor(
    public authService: AuthService) {
    this.openOptionsM = new EventEmitter();
  }

  isOwn(ownerId: number): boolean {
    return this.authService.getUserId() === String(ownerId);
  }

  public openOptions(): void {
    this.openOptionsM.emit(this.file);
  }
}
