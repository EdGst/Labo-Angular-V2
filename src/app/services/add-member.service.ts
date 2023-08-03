import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {User} from "../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class AddMemberService {

  private readonly BASE_URL: string ="https://khun.somee.com/api/Member"
  constructor(private _httpclient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._httpclient.get<User[]>(this.BASE_URL)
  }

  addUser(user: User): Observable<User>{
    return this._httpclient.post<User>(this.BASE_URL, user);
  }
}
