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
    new Quote(1, 'Rumi', 'Be empty of worrying, think of who created thoughts', new Date(1994,3,5)),
    new Quote(2, 'Maya', 'let yourself be silently drawn by the strange pill of what you really love. It will not lead you astray', new Date(2002,7,9)),
    new Quote(3, 'Mandela', 'Dance until you shatter yourself', new Date(2001, 2,1)),
    new Quote(4, 'Oprah', 'This is a stable truth, whatever you love you are',new Date(1998,9,8)),

  ];
  toggleDetails(index:any){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
