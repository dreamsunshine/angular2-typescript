import {Component,NgModule,ViewEncapsulation} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {Tooltip,Overlay} from "./directive";

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
  public todos:string[];
  public tooltip:string;
  constructor(){
    this.todos=['vue','ng2']
    this.tooltip='first declarations';
  }
}

@NgModule({
  imports:[BrowserModule],
  providers:[Overlay],
  declarations:[SwApp,Tooltip],
  bootstrap:[SwApp]
})
export class SwAppModule{
  title='swtitle';
}
let platform=platformBrowserDynamic();
platform.bootstrapModule(SwAppModule);