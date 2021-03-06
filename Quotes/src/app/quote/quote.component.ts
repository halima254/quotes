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
    new Quote(1, 'Lisa', 'Be empty of worrying, think of who created thoughts', 'Rudyard Kipling',new Date(2012,3,5)),
    new Quote(2, 'John', 'let yourself be silently drawn by the strange pill of what you really love. It will not lead you astray','Maya Angelou', new Date(2018,7,9)),
    new Quote(3, 'Irene', 'Dance until you shatter yourself','Rumi', new Date(2015, 2,1)),
    new Quote(4, 'Phillip', 'This is a stable truth, whatever you love you are','Outkast',new Date(2020,9,8)),

  ];

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postedDate= new Date (quote.postedDate)
    this.quotes.push(quote)
  }
  toggleDetails(index:any){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  thumbsup(index:number){
    this.quotes[index].likeQuote++;

  }
  thumbsdown(index:number){
    this.quotes[index].dislikeQuote--;
  }


  
    highVote() {
      let highestvote = new Quote(0, '', '', '',new Date());
      for (let i = 0; i < this.quotes.length; i++) {
        if (this.quotes[i].likeQuote > highestvote.likeQuote) {
          highestvote = this.quotes[i]
        } 
      }
      if (highestvote.likeQuote> 0) {
        return highestvote;
      }
      else {
        return;
      }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
