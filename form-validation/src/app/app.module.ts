import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './shared/service/person.service';
import { PersonListComponent } from './component/person-list/person-list.component';
import { RegisterComponent } from './component/register/register.component';
//import { PersonService } from './shared/services/person.service';

const appRoutes: Routes = [
  { path: 'validation/personList', component: PersonListComponent },
  { path: 'validation/register',component: RegisterComponent },
  {
    path: 'validation/',
    component: RegisterComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    RegisterComponent,
 
  ],
  imports: [
    BrowserModule,  HttpClientModule,FormsModule, ReactiveFormsModule,RouterModule.forRoot( appRoutes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
