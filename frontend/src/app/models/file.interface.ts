import {Person} from "./person";

export interface FileModel extends File {
  file: FileModel;
  id: number;
  name: string;
  type: string;
  owner: Person;
  size: number;
  prize: number;
  public: boolean;
}
