import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Viona Osiako', '“As long as poverty, injustice, and gross inequality persist in our world, none of us can truly rest.” ', 'Nelson Mandela',new Date(2019,0,18),5,0),
    new Quote(2, 'Viona Osiako', '“Human rights are not things that are put on the table for people to enjoy. These are things you fight for and then you protect.”', 'Wangari Mathai',new Date(2019,0,18),3,0),
    new Quote(3, 'Viona Osiako', '“Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we have been waiting for. We are the change that we seek.”', 'Barack Obama',new Date(2019,0,18),0,0),
    
  ]

  arr: number[] = this.quotes.map(quote=>quote.upvote)
  highest = Math.max(...this.arr)

  addNewQuote(quote:Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
