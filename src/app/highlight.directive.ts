import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elm: ElementRef) { 
    elm.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('click') onClicks(){
    this.textDeco('yellow')
  }
  @HostListener('click') onDoubleClicks(){
    this.textDeco('none')
  }
  private textDeco(action:string){
    this.elm.nativeElement.style.color=action;
  }
}
  

