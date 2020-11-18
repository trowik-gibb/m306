import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FileModel} from "../models/file.interface";
import {Observable, Subject} from 'rxjs';

@Injectable()
export class FileService{
  public fileChanged$: Subject<FileModel>;
  SERVER_URL = 'http://localhost:8000/allfiles/';
  constructor(private http: HttpClient) {
  }
  public getAllFiles(): Observable<FileModel[]>{
    return this.http.get<FileModel[]>(this.SERVER_URL);
  }
}
