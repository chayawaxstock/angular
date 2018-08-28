

*Form-validation-project
**use ReactiveFormModule



###Code of this project
#####\src\app\shared\models\person.model.ts:
```typescript
export interface Person{
tz:string;
name:string;
age:string;
isMale:boolean;
country:string;
}
```

#####\src\app\shared\models\tz.validation.ts:
###### algoritim of tz validation
```typescript
import { AbstractControl } from '@angular/forms';

export function ValidateTz(control: AbstractControl) {
    let total = 0;
    let i;
    if (control.value.length < 9||control.value.length>9)
        return null;
    for (i = 0; i < 9; i++) {
        let x = (((i % 2) + 1) * (control.value).charAt(i));
        total += Math.floor(x / 10) + x % 10;
    }
    if (total % 10 != 0)
        return { validTz: true };
    else null;

}
```

#####\src\app\shared\models\country.validation.ts:
###### validation if country includes in array-countries
```typescript
import { AbstractControl } from '@angular/forms';
 let countries=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];
export function ValidateCountry(control: AbstractControl) {
  if (!countries.includes(control.value) &&control.value) {
    return { validCountry: true };
  }
  return null;
}
```
#####\src\app\component\register.html:
###### form- validation use with formGroup
```html
<div class="jumbotron">
  <div class="container">
      <div class="row">
          <div class="col-md-6 offset-md-3">
              <h2>Add person</h2>
              <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
                  <div class="form-group ">
                      <label >First Name</label>
                      <input type="text" formControlName="name" required class="form-control" [ngClass]="{'is-invalid':f.name.errors&&submitted||f.name.touched&&f.name.errors }" />
                      <div *ngIf="f.name.errors&&submitted||f.name.touched&&f.name.errors" class="invalid-feedback">
                           <div *ngIf="f.name.errors.required">First Name is required</div> 
                          <div *ngIf="f.name.errors.minlength">First Name must be more 3 characters</div>
                          <div *ngIf="f.name.errors.maxlength">First Name must be less 15 characters</div>
                      </div>
                  </div>
                 
                  
                  <div class="form-group">
                      <label>Tz</label>
                      <input type="text" formControlName="tz" required class="form-control" [ngClass]="{ 'is-invalid':f.tz.errors&&submitted||f.tz.touched&&f.tz.errors }" />
                      <div *ngIf="f.tz.errors&&submitted||f.tz.touched&&f.tz.errors" class="invalid-feedback">
                           <div *ngIf="f.tz.errors.required">Tz is required</div> 
                           <div *ngIf="f.tz.errors.validTz">Tz is not correct</div> 
                          <div *ngIf="f.tz.errors.maxlength||f.tz.errors.minlength">Tz must be only 9 characters</div>
                      </div>
                  </div>

                  <div class="form-group">
                    <label>age</label>
                    <input type="number" formControlName="age" required class="form-control"  [ngClass]="{ 'is-invalid':f.age.errors&&submitted||f.age.touched&&f.age.errors }" />
                    <div *ngIf=" f.age.errors&&submitted||f.age.touched&&f.age.errors" class="invalid-feedback">
                        <div *ngIf="f.age.errors.required">age is required</div> 
                        <div *ngIf="f.age.errors.min||f.age.errors.max">age must be between 0-120</div> 
                    </div>
                </div>


                <div class="form-group">
                  <label>country</label>
                  <input type="text" formControlName="country" required class="form-control" [ngClass]="{ 'is-invalid':f.country.errors&&submitted||f.country.touched&&f.country.errors }" />
                  <div *ngIf="f.country.errors&&submitted||f.country.touched&&f.country.errors " class="invalid-feedback">
                       <div *ngIf="f.country.errors.required">country is required</div>
                       <div *ngIf="f.country.errors.validCountry">cuntry dont found-not correct</div>
                  </div>
              </div>

              <div class="form-group">
                <label>isMale</label>
                <input id="isMale" type="checkbox" formControlName="isMale"  class="form-control"  />
            </div>
                  <div class="form-group">
                      <button  class="btn btn-primary">Register</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</div>

```
#####\src\app\component\register.ts:
###### form- validation use with formGroup-formBuilder
```typescript
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
  submitted = false;
  registerForm: FormGroup;
  userList: Person[];

  constructor(private formBuilder: FormBuilder, private personService: PersonService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      tz: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), ValidateTz]],
      country: ['', [Validators.required, ValidateCountry]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(120)]],
      isMale: [false]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    let person: Person = this.registerForm.value;
    this.personService.addPerson(person);
    this.reset();

  }

  //reset the form
  reset() {
    for (let name in this.registerForm.controls) {
      this.registerForm.controls[name].setValue('');
      this.registerForm.controls[name].setErrors(null);
    }
    this.registerForm.controls['isMale'].setValue(false);
    this.submitted=false;
  }
}

```
#####\src\app\component\person-list.ts:
###### get all people that add

```typescript
export class PersonListComponent implements OnInit {
  personList: Person[];
  constructor(private personService:PersonService) { }
  ngOnInit() {
    this.personService.getAllUsers((personList) => this.personList = personList);
  }
}
```

#####\src\app\component\person-list.html:
###### see all people that add

```html
<ol class="custom-counter">
  <li *ngFor="let person of personList">
    <span>tz: {{person.tz}}  </span>
    <span>age: {{person.age}} </span>
    <span>name: {{person.name}} </span>
    <span>isMale: {{person.isMale}} </span>
    <span>country: {{person.country}} </span>
  </li>
</ol>

```
#####\src\app\shared\services\person.service.ts:
###### my provider
```typescript
export class PersonService {

  basicURL = "https://seldat-angular.herokuapp.com/api";
  constructor(private http: HttpClient) {

  }

  //getAllPerson
  userList: Person[];
  getAllUsers(setUserList: (res) => void): void {
    let url: string = this.basicURL + "/getList";
    this.http.get<Person[]>(url)
      .subscribe(res => {
        this.userList = res;
        setUserList(this.userList);
      });

  }
  //addPerson
  addPerson(person: Person): void {
    let url: string = this.basicURL + "/user";
    this.http.post(url, person).subscribe(res => {
      alert("good")

    },
      err => {
        alert("error");
      });
  }
```




## Run this app in dev mode:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


See live demo:
https://seldat-angular.herokuapp.com/


