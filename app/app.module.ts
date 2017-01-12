import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";

import * as appCp from './app.component';
import {clickmeComponent} from './clickme.component';

import {FormComponent} from './form.component';

import {siteformComponent} from "./siteform.component";

@NgModule({
  imports:[BrowserModule,FormsModule],
  declarations:[appCp.AppComponent,clickmeComponent,FormComponent,siteformComponent],
  bootstrap:[appCp.AppComponent]
})

export class AppModule{}

@NgModule({
  imports:[BrowserModule],
  declarations:[appCp.SwApp],
  bootstrap:[appCp.SwApp]
})
export class SwAppModule{}