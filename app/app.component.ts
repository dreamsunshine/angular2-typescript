import {Component} from '@angular/core';
import {Site} from './sites';
// import {SwApp} from "./switchng2/ngapp";

// 生命周期
@Component({
  selector:'panel',
  inputs:['title','caption'],
  template:'<ng-content></ng-content>'
})
export class panel{
  ngOnChanges(changes) {
    console.log('On changes', changes);
  }
  ngOnInit() {
    console.log('Initialized');
  }
  ngDoCheck() {
    console.log('Do check');
  }
  ngOnDestroy() {
    console.log('Destroy');
  }
  ngAfterContentInit() {
    console.log('After content init');
  }
  ngAfterContentChecked() {
    console.log('After content checked');
  }
  ngAfterViewInit() {
    console.log('After view init');
  }
  ngAfterViewChecked() {
    console.log('After view checked');
  }
}

@Component({
  selector:'my-app',
  template:`
    <div>
      <ul>
        <li *ngFor="let link of links"><a href="{{link.href}}">{{link.name}}</a></li>
      </ul>
    </div>
    <h1>{{title}}</h1>
    <h2>my love:{{mysite}}</h2>
    <p>列表</p>
    <ul>
      <li *ngFor="let site of sites">{{site.name}}</li>
    </ul>
    <click-me></click-me>
    <ss-form></ss-form>
    <!--
    <div>
      <button (click)="toggle()">Toggle</button>
      <div *ngIf="counter % 2 == 0">
        <panel caption="Sample caption" title="Sample">Hello world!</panel>
      </div>
    </div> -->
    
  `
})
export class AppComponent{
  title='list';
  mysite='something';
  sites=[new Site(1,'google'),new Site(1,'bing'),new Site(1,'baidu')]
  links=[{href:'/',name:'首页'},{href:'/app.html',name:'app'}]
  counter:number=0;
  toggle() {
    this.counter += 1;
  }
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