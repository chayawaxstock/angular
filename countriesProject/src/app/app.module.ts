import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentnameComponent } from './componentname/componentname.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { HeaderComponent } from './header/header.component';
import { MyHeaderComponent } from './my-header/my-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentnameComponent,
    HomeComponent,
    CountriesComponent,
    HeaderComponent,
    MyHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
