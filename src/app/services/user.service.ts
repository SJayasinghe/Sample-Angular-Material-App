
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  rootURL : String = 'https://reqres.in/'; 

  constructor(private http: HttpClient) {}

  addUser(user: any) {
    return this.http.post(this.rootURL + 'api/users', {user});
  }

  getUsers() {
    return this.http.get(this.rootURL + 'api/users');
  }

  // create(user: any): Observable<any> {
  //   return this.http.post(this.rootURL + '/users', {user});
  // }

}
