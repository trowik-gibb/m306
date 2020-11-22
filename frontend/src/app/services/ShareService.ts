import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FileModel} from "../models/file.interface";
import {Person} from "../models/person";
import {Observable} from "rxjs";

@Injectable()
export class ShareService{
  constructor(private http: HttpClient) {
  }

  public shareFile(file: FileModel, person: Person): Observable<any>
  {
    return null;
  }
}
