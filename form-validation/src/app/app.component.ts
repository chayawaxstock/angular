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

<<<<<<< HEAD
  constructor() { }
=======
  
  title = 'lands';

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private personService:PersonService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
          tz: ['', [Validators.required, Validators.minLength(9),Validators.maxLength(9),ValidateTz]],
          country:['',[Validators.required,ValidateCountry]],
          age:['',[Validators.required,Validators.min(0),Validators.max(120)]],
          isMale:['',[Validators.required]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      let person:Person=this.registerForm.value;
      this.personService.addPerson(person).subscribe(data=>{
          if(data[0].status=="400")
            return
      });

  }
>>>>>>> 56d9df9a384f2889cd7563b196497dd1270aa853
}
