import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileModel} from '../models/file.interface';
import {Person} from '../models/person';
import {Observable} from 'rxjs';
import {ShareFilePerson} from "../models/ShareFilePerson";

@Injectable()
export class ShareService{
  constructor(private http: HttpClient) {
  }

  public shareFile(file: FileModel, person: Person): Observable<any>
  {
    const formData = new FormData();
    formData.append('file', String(file.id));
    formData.append('creator', localStorage.getItem('user'));
    formData.append('receiver', String(person.id));
    return this.http.post('http://localhost:8000/sharefileperson/', formData);
  }

  public getSharedFiles(receiver: number): Observable<ShareFilePerson[]>{
    const formData = new FormData();
    formData.append('receiver', String(receiver));
    return this.http.get<ShareFilePerson[]>('http://localhost:8000/sharefileperson/' + receiver + '/');
  }
}
