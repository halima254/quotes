import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  quotes: Quote[]=[
    {id:1, author:'Rumi',description:'Be empty of worrying, think of who created thoughts'},
    {id:2, author:'Maya',description:'let yourself be silently drawn by the strange pill of what you really love. It will not lead you astray'},
    {id:3, author:'Mandela',description:'Dance until you shatter yourself'},
    {id:4, author:'Oprah',description:'This is a stable truth, whatever you love you are'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
