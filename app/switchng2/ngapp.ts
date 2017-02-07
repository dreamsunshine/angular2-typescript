/// <reference path="../../node_modules/immutable/dist/immutable.d.ts" />


import {Component,NgModule,ViewEncapsulation,Input,Output,EventEmitter,Inject,Directive,forwardRef,Host,Attribute,ContentChildren,ViewChildren,ContentChild,QueryList,AfterContentInit,TemplateRef,ChangeDetectionStrategy,DoCheck} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {Tooltip,Overlay} from "./directive";
import {List as ImmutableList} from 'immutable';

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
  ngDoCheck(){
    console.log('Change detection run in the InputBox component');
  }
}
// template标签引用
@Component({
  selector:'todo-list',
  template:`
    <ul>
        <!-- <li *ngFor="let todo of todos; let index=index" [class.completed]="todo.completed">
          <input type="checkbox" [checked]="todo.completed" (change)="toggleComplete(index)" />
          {{todo.label}}
        </li> -->
        <template *ngFor="let todo of todos; template:itemsTemplate"></template>
    </ul>
  `
})
class TodoList{
  // @Input() todos:Todo[];
  @Input() todos:ImmutableList<Todo>;
  @Input() itemsTemplate:TemplateRef<any>;
  @Output() toggle=new EventEmitter<Todo>();
  // toggleComplete(index:number){
  //   this.toggle.emit(index);
  // }
  ngDoCheck() {
    console.log('Change detection run in the TodoList component');
  }
}
@Component({
  selector:'todo-app',
  template:`
    <div><text-input inputPlaceholder="New todo..." buttonLabel="Add" (inputText)="addTodo($event)">Add new item:</text-input></div>
    <todo-list [todos]="todos" (toggle)="toggleComplete($event)" [itemsTemplate]="itemsTemplate"></todo-list>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
class TodoApp{
  // public todos:Todo[];
  constructor(){
    // this.todos =[{label:'buy milk',completed:false},{label:'do sth',completed:true}];
    
  }
  todos:ImmutableList<Todo>=ImmutableList.of({
    label:'buy milk',completed:false
  },{
    label:'do sth',completed:true
  });
  @ContentChild(TemplateRef) private itemsTemplate:TemplateRef<any>;
  @ViewChildren(TodoList) todoLists:QueryList<TodoList>;
  toggleComplete(todo){
    
    // todo.completed=!todo.completed
    this.todos=todo.updateIn(this.todos,todo=>{
      let newTodo={
        label:todo.label,
        completed:!todo.completed
      };
      return newTodo;
    })
    console.log(this.todos);
  }
  addTodo(value){
    this.todos=this.todos.push({label:value,completed:false})
  }
  ngDoCheck() {
    console.log('Change detection run in the TodoApp component');
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
  // 前向引用
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
// tab分组件
// tab标题
@Component({
  selector:'tab-title',
  styles:[`
    .tab-title {
      display: inline-block;
      cursor: pointer;
      padding: 5px;
      border: 1px solid #ccc;
    }
  `],
  template:`
    <div class='tab-title' (click)="handleClick()"><ng-content></ng-content></div>
  `
})
class TabTitle{
  @Output('selected') tabSelected:EventEmitter<TabTitle>=new EventEmitter<TabTitle>();
  handleClick(){
    this.tabSelected.emit(this);
  }
}
// tab内容
@Component({
  selector:'tab-content',
  styles:[`
    .tab-content{
      border: 1px solid #ccc;
      border-top: none;
      padding: 5px;
    }
  `],
  template:`
    <div class="tab-content" [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})
class TabContent{
  isActive:boolean=false;
}
// tab主体
@Component({
  selector:'tabs-main',
  styles:[`
    .tab {
        display: inline-block;
      }
      .tab-nav {
        list-style: none;
        padding: 0;
        margin: 0;
      }
  `],
  template:`
    <div class="tab">
      <div class="tab-nav">
        <ng-content select="tab-title"></ng-content>
      </div>
      <ng-content select="tab-content"></ng-content>
    </div>
  `
})
class TabsMain implements AfterContentInit{
  @Output('tabChange') tabChange:EventEmitter<number>=new EventEmitter<number>();
  @ContentChildren(TabTitle) tabTitles:QueryList<TabTitle>;
  @ContentChildren(TabContent) tabContents:QueryList<TabContent>;

  active:number;
  select(index:number){
    let contents:TabContent[]=this.tabContents.toArray();
    contents[this.active].isActive=false;
    this.active=index;
    contents[this.active].isActive=true;
    this.tabChange.emit(index);
  }
  ngAfterContentInit(){
    this.tabTitles
      .map(t=>t.tabSelected)
      .forEach((t,i)=>{
        t.subscribe(_=>{
          this.select(i);
        })
      });
    this.active=0;
    this.select(0);
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
  // public todos:Todo[];
  public tooltip:string;
  constructor(){
    // this.todos =[{label:'buy milk',completed:false},{label:'do sth',completed:true}]
    this.tooltip='first declarations';
  }
  toggleComplete(todo:Todo){
    // this.todos[index].completed=!this.todos[index].completed
    todo.completed=!todo.completed;
    console.log('todo',todo);
    if(todo.completed){
      console.log('已置为已完成')
    }else{
      console.log('已置为未完成')
    }
    
  }
  // addTodo(value){
  //   this.todos.push({label:value,completed:false})
  // }
  tabChanged(tab){
    console.log(tab)
  }
  tabChange(index:number){
    // console.log(index);
  }
  ngDoCheck() {
    console.log('Change detection run in the SwApp component');
  }
}

@NgModule({
  imports:[BrowserModule,FormsModule],
  providers:[Overlay],
  declarations:[SwApp,Tooltip,TodoList,InputBox,Tabs,Tab,TabsMain,TabContent,TabTitle,TodoApp],
  bootstrap:[SwApp]
})
export class SwAppModule{
  title='swtitle';
}
let platform=platformBrowserDynamic();
platform.bootstrapModule(SwAppModule);