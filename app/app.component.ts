import {Component} from '@angular/core';
import {Site} from './sites';
// import {SwApp} from "./switchng2/ngapp";

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

@Component({
  selector:'app',
  templateUrl:'dist/swapp.html'
  // template:`
  //   <div>todolist</div>
  //   <ul>
  //     tem
  //       <li *ngFor="let todo of todos">{{todo}}</li>
  //   </ul>  
  // `
})

export class SwApp {
  public todos:string[];
  constructor(){
    this.todos=['vue','ng2']
  }
}