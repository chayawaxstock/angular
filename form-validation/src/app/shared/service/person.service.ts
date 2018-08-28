import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person.model';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Injectable()
export class PersonService {

  basicURL = "https://seldat-angular.herokuapp.com/api";
  constructor(private http: HttpClient) {

  }

  //getAllPerson
  userList: Person[];
  getAllUsers(setUserList: (res) => void): void {
    let url: string = this.basicURL + "/getList";
    this.http.get<Person[]>(url)
      .subscribe(res => {
        this.userList = res;
        setUserList(this.userList);
      });

  }
  //addPerson
  addPerson(person: Person): void {
    let url: string = this.basicURL + "/user";
    this.http.post(url, person).subscribe(res => {
      alert("good")

    },
      err => {
        alert("error");
      });
  }



}
