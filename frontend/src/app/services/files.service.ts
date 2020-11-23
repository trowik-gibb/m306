import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FileModel } from "../models/file.interface";
import { Observable, Subject } from 'rxjs';
import {tap} from "rxjs/operators";

const BACKEND_PATH = 'http://localhost:8000';


@Injectable()
export class FileService {
  public fileChanged$: Subject<FileModel>;
  constructor(private http: HttpClient) { this.fileChanged$ = new Subject<FileModel>(); }


  public getUsersFiles() {
    return this.http.get(`${BACKEND_PATH}/ownfiles/`);
  }


  public getAllFiles(): Observable<FileModel[]> {
    return this.http.get<FileModel[]>(`${BACKEND_PATH}/allfiles/`);
  }

  public deleteFile(id: number): Observable<FileModel> {
    return this.http.delete<FileModel>(BACKEND_PATH + '/file/delete/' + id + '/').pipe(tap(file => this.fileChanged$.next(file)));
  }
}
