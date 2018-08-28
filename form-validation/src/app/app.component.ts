import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateCountry } from './shared/validation/country.validator';
import { ValidateTz } from './shared/validation/tz.validator';
import { PersonService } from './shared/service/person.service';
import { Person } from './shared/model/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }
}
