import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Viona Osiako', '“As long as poverty, injustice, and gross inequality persist in our world, none of us can truly rest.” ', 'Nelson Mandela',new Date(2019,1,18),0,0),
    new Quote(2, 'Viona Osiako', '“Human rights are not things that are put on the table for people to enjoy. These are things you fight for and then you protect.”', 'Wangari Mathai',new Date(2020,1,18),0,0),
    new Quote(3, 'Viona Osiako', '“Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we have been waiting for. We are the change that we seek.”', 'Barack Obama',new Date(2022,1,18),0,0),
    
  ]

  deleteBtn(isDeleted: boolean, index: number){
    if(isDeleted){
      let del = confirm(`Are you sure you want to delete ${this.quotes[index].id}?`)
      if(del){
        this.quotes.splice(index,1)
      }
    }
  }
  // arr: number[] = this.quotes.map(quote=>quote.upvote)
  // highest = Math.max(...this.arr)

  first!:number
  last!:number
  count!:number

  highest(){
    this.first =0
    this.last =0

    for(this.count=0; this.count < this.quotes.length; this.count++){
      this.last = this.quotes[this.count].upvote;
      if(this.last > this.first){ this.first=this.last}
    }
    return this.first;
  }

  addNewQuote(quote:Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
