import {Component} from '@angular/core';

@Component({
  selector:'click-me',
  template:`
    <button (click)="onClickme()">点我</button>
    {{clickMessage}}
    <div>
      <input #box (keyup)="onKey($event)" />
      <p>{{values}}</p>
    </div>
  `
})
export class clickmeComponent{
  clickMessage='';
  values='';
  onClickme(){
    this.clickMessage='点击完成';
  }
  onKey(event:any){
    this.values=event.target.value;
  }
}