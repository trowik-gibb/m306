import {Person} from "./person";
import {FileModel} from "./file.interface";

export class ShareFilePerson{
  receiver: Person;
  creator: Person;
  file: FileModel;
  shared_at: Date;
}
