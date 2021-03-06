import {Person} from "./person";

export interface FileModel extends File{
  id: number;
  name: string;
  type: any;
  owner: Person;
  size: number;
  price: number;
  public: boolean;
  shared: boolean;
}
