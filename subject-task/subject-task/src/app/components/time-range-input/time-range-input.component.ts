import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../shared/services/package.service';

@Component({
  selector: 'app-time-range-input',
  templateUrl: './time-range-input.component.html',
  styleUrls: ['./time-range-input.component.css']
})
export class TimeRangeInputComponent implements OnInit {

  listPackage:any=[];
  constructor( private packageService:PackageService) {
   }
  dateEnd:Date;
  dateBegin:Date;
  ngOnInit() {
  }

  fillter()
  {
    if(this.dateEnd&&this.dateBegin)
      this.packageService.subject1.next({start:this.dateBegin,end:this.dateEnd});

  }

}
