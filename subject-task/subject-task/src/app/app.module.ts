import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PackageListComponent } from './components/package-list/package-list.component';
import { TimeRangeInputComponent } from './components/time-range-input/time-range-input.component';
import { PackageInputComponent } from './components/package-input/package-input.component';
import { PackageService } from './shared/services/package.service';

@NgModule({
  declarations: [
    AppComponent,
    PackageListComponent,
    TimeRangeInputComponent,
    PackageInputComponent,
 
  ],
  imports: [
    BrowserModule,  HttpClientModule,FormsModule, ReactiveFormsModule
  ],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
