export interface FileModel extends File{
  name: string;
  type: string;
  owner_id: number;
  size: number;
  prize: number;
  public: boolean;
}
