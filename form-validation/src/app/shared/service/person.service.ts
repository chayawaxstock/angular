import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person.model';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Injectable()
export class PersonService {

  baseUrl:string="localhost:3500/api/user";
  constructor(private http:HttpClient) {
  
   }

   addPerson(person:Person): Observable<any> {
    return this.http.post(this.baseUrl,person); 
}


}
