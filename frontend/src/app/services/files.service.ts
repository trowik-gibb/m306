import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BACKEND_PATH = "http://localhost:8000";

@Injectable()
export class FileService {

  constructor(private http: HttpClient) { }


  public getUsersFiles() {
    return this.http.get(`${BACKEND_PATH}/ownfiles/`);
  }
}
