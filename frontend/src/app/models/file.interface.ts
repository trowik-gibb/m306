import { Person } from "./person.interface";

export interface FileModel extends File{
  id: number;
  name: string;
  type: string;
  owner: Person;
  size: number;
  price: number;
  public: boolean;
}
