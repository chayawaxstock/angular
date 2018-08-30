import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../shared/services/package.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent  {
    message: any;
    subscription: Subscription;
    listPackage:any=[];
    listNum:any=[];
 
    constructor(private packageService: PackageService) {
     
      this.packageService.subject.subscribe(
        {
          next: (v:any) => {this.listPackage=[];
               v.forEach(element => {
            this.listPackage.push({name:element.package.name})
           
          })
        }
          }  );

      this.packageService.subject1.subscribe(
        {
          next: (v:{start:any,end:any}) => this.listPackage.forEach(el=>{
            this.packageService.fillterDate(v.start,v.end,el.name).subscribe(p=>{
                el.donload=p.downloads
                ;
             })
          })
        }
      );
      
    }

}
