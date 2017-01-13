import {Directive,HostListener,ElementRef,Input,Injectable,Inject} from "@angular/core";

export class Overlay{
  private el:HTMLElement;
  constructor(){
    var el=document.createElement('div');
    el.className="tip";
    this.el=el;
  }
  close(){
    this.el.hidden=true;
  }
  open(el,text){
    this.el.innerHTML=text;
    this.el.hidden=false;
    var rect=el.nativeElement.getBoundingClientRect();
    this.el.style.left=rect.left+'px';
    this.el.style.top=rect.top+'px';
  }
  attach(target){
    target.appendChild(this.el);
  }
  detach(){
    this.el.parentNode.removeChild(this.el);
  }
}
class OverlayMock{
  constructor(){}
  close(){}
  open(el,text){}
  attach(target){}
  detach(){}
}
@Directive({
  selector:"[asTooltip]"
})
export class Tooltip{
  private defaultTip='ddd';
  @Input() set defaulttip(name:string){
    this.defaultTip=name||this.defaultTip;
  }
  @Input("asTooltip")
  tooltip:string;
  constructor(private el:ElementRef,private overlay:Overlay){
    this.overlay.attach(el.nativeElement);
    el.nativeElement.hidden=true;
  }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.overlay.open(this.el,this.tooltip||this.defaultTip)
  }

  @HostListener('mouseleave')
OnMouseLeave(){
  this.overlay.close();
}
}