import { Component, Input } from "@angular/core";

import { FileModel } from "../../models/file.interface";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "file-element",
  templateUrl: "file.component.html",
  styleUrls: ["file.component.css"]
})
export class FileComponent {
  @Input()
  file: FileModel;

  constructor(
    public authService: AuthService) {
  }

  isOwn(owner: string) {
    return this.authService.getUsername() === owner
  }
}
