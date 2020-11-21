import { Person } from "./person.interface";

  export interface FileModel extends File{
  name: string;
  type: string;
  owner: Person;
  size: number;
  prize: number;
  public: boolean;
}
