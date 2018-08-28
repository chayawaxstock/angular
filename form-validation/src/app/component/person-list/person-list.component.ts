import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../shared/service/person.service';
import { Person } from '../../shared/model/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
 
  personList: Person[];

  constructor(private personService:PersonService) { }

  ngOnInit() {
    this.personService.getAllUsers((personList) => this.personList = personList);
  }

}
