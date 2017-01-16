import {Component,NgModule,ViewEncapsulation,Input,Output,EventEmitter,Inject,Directive,forwardRef,Host} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {Tooltip,Overlay} from "./directive";

interface Todo{
  completed:boolean;
  label:string;
}

@Component({
  selector:'text-input',
  template:`
    <!-- 内容投影 -->
    <ng-content></ng-content>
    <input [(ngModel)]="additem" [placeholder]="inputPlaceholder" type="text" /><button (click)="emitText(additem); additem=''">{{buttonLabel}}</button>
    `
})
class InputBox{
  @Input() inputPlaceholder:string;
  @Input() buttonLabel:string;
  @Output() inputText=new EventEmitter<string>();
  emitText(text:string){
    this.inputText.emit(text);
  }
}

@Component({
  selector:'todo-list',
  template:`
    <ul>
        <li *ngFor="let todo of todos; let index=index" [class.completed]="todo.completed">
          <input type="checkbox" [checked]="todo.completed" (change)="toggleComplete(index)" />
          {{todo.label}}
        </li>
    </ul>
  `
})
class TodoList{
  @Input() todos:Todo[];
  @Output() toggle=new EventEmitter<number>();
  toggleComplete(index:number){
    this.toggle.emit(index);
  }
}
// tabs demo
@Component({
  selector:'tab',
  template:'<div [hidden]="!isActive"><ng-content></ng-content></div>'
})
class Tab{
  isActive:boolean;
  @Input()
  public title:string;
  constructor(@Inject(forwardRef(()=>Tabs)) @Host() private tabs:Tabs){
    this.tabs.addTab(this);
  }
}
@Component({
  selector:'tabs',
  styles: [
    `
      .tab {
        display: inline-block;
      }
      .tab-header {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .tab-header .is-active {
        background-color: #eee;
      }
      .tab-header li {
        display: inline-block;
        cursor: pointer;
        padding: 5px;
        border: 1px solid #ccc;
      }
      .tab-content {
        border: 1px solid #ccc;
        border-top: none;
        padding: 5px;
      }
    `
  ],
  template:`
    <div class="tab">
      <ul class="tab-header">
        <li *ngFor="let tab of tabs;let index=index" [class.is-active]="active==index" (click)="select(index)">{{tab.title}}</li>
      </ul>
      <div class="tab-content"><ng-content></ng-content></div>
    </div>
  `
})
class Tabs{
  @Output('changed') private tabChanged:EventEmitter<Tab>=new EventEmitter<Tab>();
  private tabs:Tab[];
  private active:number;
  constructor(){
    this.tabs=[];
    this.active=0;
  }
  addTab(tab:Tab){
    if(this.tabs.length==this.active){
      tab.isActive=true;
    }
    this.tabs.push(tab);
  }
  select(index){
    this.tabs[this.active].isActive=false;
    this.active=index;
    this.tabs[index].isActive=true;
    this.tabChanged.emit(this.tabs[index]);
  }
}

@Component({
  selector:'app',
  templateUrl:'dist/swapp.html',
  styles:[
    `
      ul,li{
        list-style:none
      }
      .completed{
        text-decoration:line-through
      }
    `
  ],
  encapsulation:ViewEncapsulation.Emulated
})
export class SwApp {
  isvalid=true;
  public todos:Todo[];
  public tooltip:string;
  constructor(){
    this.todos =[{label:'buy milk',completed:false},{label:'do sth',completed:true}]
    this.tooltip='first declarations';
  }
  toggleComplete(index){
    this.todos[index].completed=!this.todos[index].completed
  }
  addTodo(value){
    this.todos.push({label:value,completed:false})
  }
  tabChanged(tab){
    console.log(tab)
  }
}

@NgModule({
  imports:[BrowserModule,FormsModule],
  providers:[Overlay],
  declarations:[SwApp,Tooltip,TodoList,InputBox,Tabs,Tab],
  bootstrap:[SwApp]
})
export class SwAppModule{
  title='swtitle';
}
let platform=platformBrowserDynamic();
platform.bootstrapModule(SwAppModule);