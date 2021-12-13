
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

  getUser(id : any) {
    return this.http.get(this.rootURL + `api/users/${id}`);
  }

  updateUser(user : any , id : any) {
    return this.http.put(this.rootURL + `api/users/${id}`, {user});
  }

  deleteUser(id : any) {
    return this.http.delete(this.rootURL + `api/users/${id}`);
  }

  // create(user: any): Observable<any> {
  //   return this.http.post(this.rootURL + '/users', {user});
  // }

}
