import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../shared/services/package.service';

 

@Component({
  selector: 'app-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.css']
})
export class PackageInputComponent implements OnInit {
  
  constructor(private packageService:PackageService) { 
    
   }
  search:string="";
  ngOnInit() {
  }

  

  searchPackage(e): void {
    
    this.packageService.sendMessage(e.target.value).subscribe(listPackage => { this.packageService.subject.next(listPackage); });
}
}
