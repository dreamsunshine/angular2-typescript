import {Component} from "@angular/core";
import {Form} from "./sites";

@Component({
  moduleId:module.id,
  selector:'site-form',
  templateUrl:'site-form.component.html'
})

export class FormComponent{
  active=true;
  urls=['baidu.com','google.com','bing.com','soso.com'];
  model=new Form(1,'百度',this.urls[0],10000);
  submitted=false;
  onSubmit(){
    this.submitted=true;
  }
  get diagnostic(){return JSON.stringify(this.model);}

  newSite(){
    this.model=new Form(5,'','');
    this.active=false;
    setTimeout(()=>this.active=true, 0);
  }
}