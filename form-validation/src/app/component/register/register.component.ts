import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { Person } from '../../shared/model/person.model';
import { PersonService } from '../../shared/service/person.service';
import { ValidateCountry } from '../../shared/validation/country.validator';
import { ValidateTz } from '../../shared/validation/tz.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'register';
  submitted=false;
  registerForm: FormGroup;
    userList: Person[];

  constructor(private formBuilder: FormBuilder,private personService:PersonService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
          tz: ['', [Validators.required, Validators.minLength(9),Validators.maxLength(9),ValidateTz]],
          country:['',[Validators.required,ValidateCountry]],
          age:['',[Validators.required,Validators.min(0),Validators.max(120)]],
          isMale:['']
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted=true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      let person:Person=this.registerForm.value;
      this.personService.addPerson(person);
   

  }
}
