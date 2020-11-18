import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FileModel } from "../models/file.interface";
import { Observable, Subject } from 'rxjs';

const BACKEND_PATH = "http://localhost:8000";

@Injectable()
export class FileService {

  constructor(private http: HttpClient) { }

  public fileChanged$: Subject<FileModel>;

  public getUsersFiles() {
    return this.http.get(`${BACKEND_PATH}/ownfiles/`);
  }


  public getAllFiles(): Observable<FileModel[]> {
    return this.http.get<FileModel[]>(`${BACKEND_PATH}/allfiles/`);
  }
}
