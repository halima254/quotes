import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[]=[
    {id:1, author:'Rudyard'},
    {id:2, author:'Maya'},
    {id:3, author :'Rumi'},
    {id:4, author:'Oprah'},

  ];


  }

