import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  quote: Quote;
 @Input() defaultColor: string;
 @Input("favQuote") favColor:string;

    constructor(private el: ElementRef) {
      this.highlight(this.favColor || this.defaultColor || "white")
      
    }
    private highlight(color:string){
      this.el.nativeElement.style.backgroundColor = color;
    }
}