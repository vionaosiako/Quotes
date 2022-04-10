import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-quote-rating',
  templateUrl: './quote-rating.component.html',
  styleUrls: ['./quote-rating.component.css']
})
export class QuoteRatingComponent implements OnInit {
@Input()
quotes!:Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
