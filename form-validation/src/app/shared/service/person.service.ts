import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person.model';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Injectable()
export class PersonService {

<<<<<<< HEAD
  basicURL = "http://localhost:3500/api";
=======
  baseUrl:string="localhost:3500/api/user";
>>>>>>> 56d9df9a384f2889cd7563b196497dd1270aa853
  constructor(private http:HttpClient) {
  
   }

<<<<<<< HEAD

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



=======
   addPerson(person:Person): Observable<any> {
    return this.http.post(this.baseUrl,person); 
}


>>>>>>> 56d9df9a384f2889cd7563b196497dd1270aa853
}
