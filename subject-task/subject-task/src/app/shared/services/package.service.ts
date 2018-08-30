import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private httpClient: HttpClient) {

  }

     subject = new Subject();
     subject1 = new Subject();
     sendMessage(search: string): Observable<any> {
    return this.httpClient.get(`https://api.npms.io/v2/search/suggestions?q=[[${search}]]&size=40`);

  }

  fillterDate(dateBegin:Date,dateEnd:Date,name:string):Observable<any>
  {
  
        return this.httpClient.get(`https://api.npmjs.org/downloads/point/${dateBegin}:${dateEnd}/${name}`);
  }



}
