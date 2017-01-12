import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {clickmeComponent} from './clickme.component';

import {FormComponent} from './form.component';

import {siteformComponent} from "./siteform.component";

@NgModule({
  imports:[BrowserModule,FormsModule],
  declarations:[AppComponent,clickmeComponent,FormComponent,siteformComponent],
  bootstrap:[AppComponent]
})

export class AppModule{}