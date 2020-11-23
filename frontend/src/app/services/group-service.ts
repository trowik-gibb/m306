import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Group} from "../models/Group";
import {Observable} from "rxjs";

@Injectable()
export class GroupService{
  SERVER_URL = 'http://localhost:8000/allgroups/';
  constructor(private http: HttpClient) {
  }
  public getAllGroups(): Observable<Group[]>{
    return this.http.get<Group[]>(this.SERVER_URL);
  }
}
