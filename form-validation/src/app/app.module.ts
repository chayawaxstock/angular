import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './shared/service/person.service';
//import { PersonService } from './shared/services/person.service';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,  HttpClientModule,FormsModule, ReactiveFormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
