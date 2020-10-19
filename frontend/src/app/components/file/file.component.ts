import { Component, Input } from "@angular/core";

import { File } from "../../models/file.interface";

@Component({
  selector: "file",
  templateUrl: "file.component.html",
  styleUrls: ["file.component.css"]
})
export class FileComponent {
  @Input()
  file: File;
}
