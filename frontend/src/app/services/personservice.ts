import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {Person} from "../models/person";

@Injectable()
export class PersonService{
  constructor(private http: HttpClient) {
  }

  public getAllPersons(): Observable<Person[]>{
    return  this.http.get<Person[]>('http://localhost:8000/allpersons');
  }
}
