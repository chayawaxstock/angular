import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './shared/service/person.service';
<<<<<<< HEAD
import { PersonListComponent } from './component/person-list/person-list.component';
import { RegisterComponent } from './component/register/register.component';
=======
>>>>>>> 56d9df9a384f2889cd7563b196497dd1270aa853
//import { PersonService } from './shared/services/person.service';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PersonListComponent,
    RegisterComponent,
=======
>>>>>>> 56d9df9a384f2889cd7563b196497dd1270aa853
 
  ],
  imports: [
    BrowserModule,  HttpClientModule,FormsModule, ReactiveFormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
