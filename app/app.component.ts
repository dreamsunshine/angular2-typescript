import {Component} from '@angular/core';
import {Site} from './sites';

@Component({
  selector:'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>my love:{{mysite}}</h2>
    <p>列表</p>
    <ul>
      <li *ngFor="let site of sites">{{site.name}}</li>
    </ul>
    <click-me></click-me>
    <ss-form></ss-form> 
  `
})

export class AppComponent{
  title='list';
  mysite='something';
  sites=[new Site(1,'google'),new Site(1,'bing'),new Site(1,'baidu')]
}