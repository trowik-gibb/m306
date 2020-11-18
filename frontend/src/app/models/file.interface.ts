export interface FileModel extends File{
  name: string;
  type: string;
  owner: string;
  size: number;
  prize: number;
  public: boolean;
}
