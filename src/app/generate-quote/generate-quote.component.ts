import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-generate-quote',
  templateUrl: './generate-quote.component.html',
  styleUrls: ['./generate-quote.component.css']
})
export class GenerateQuoteComponent implements OnInit {
  newQuote = new Quote(0, '', '', '',new Date(),0,0);
  
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
