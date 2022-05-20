import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSett]'
})
export class SettDirective {

  constructor(private Element:ElementRef){
    Element.nativeElement.style.paddingTop = '30px';
    Element.nativeElement.style.textAlign = 'center';
    }

}
