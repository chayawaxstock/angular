import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person.model';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Injectable()
export class PersonService {

  basicURL = "http://localhost:3500/api";
  constructor(private http:HttpClient) {
  
   }


   userList: Person[];
   getAllUsers(setUserList: (res) => void): void {
     let url: string = this.basicURL + "/getList";
     this.http.get<Person[]>(url)
       .subscribe(res => {
         this.userList = res;
         setUserList(this.userList);
       });
 
   }

   addPerson(person:Person):void {
    let url: string = this.basicURL + "/user";
    this.http.post(url,person).subscribe(res=>{
       console.log(res);
    },
  err=>{
     console.log("error");
  }); 
}



}
