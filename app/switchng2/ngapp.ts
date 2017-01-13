import {Component,NgModule,ViewEncapsulation,Input,Output,EventEmitter} from "@angular/core";
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
}

@NgModule({
  imports:[BrowserModule,FormsModule],
  providers:[Overlay],
  declarations:[SwApp,Tooltip,TodoList,InputBox],
  bootstrap:[SwApp]
})
export class SwAppModule{
  title='swtitle';
}
let platform=platformBrowserDynamic();
platform.bootstrapModule(SwAppModule);