import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 completeQuote(isComplete:any,index:any){
   if (isComplete){
     this.quotes.splice(index, 1)
   }
 }

  quotes: Quote[] = [
    new Quote(1, 'Rumi', 'Be empty of worrying, think of who created thoughts'),
    new Quote(2, 'Maya', 'let yourself be silently drawn by the strange pill of what you really love. It will not lead you astray'),
    new Quote(3, 'Mandela', 'Dance until you shatter yourself'),
    new Quote(4, 'Oprah', 'This is a stable truth, whatever you love you are'),

  ];
  toggleDetails(index:any){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
