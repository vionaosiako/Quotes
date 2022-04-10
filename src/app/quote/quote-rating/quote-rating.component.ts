import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-quote-rating',
  templateUrl: './quote-rating.component.html',
  styleUrls: ['./quote-rating.component.css']
})
export class QuoteRatingComponent implements OnInit {
@Input()
quotes!:Quote;

@Output() isDeleted = new EventEmitter<boolean>();

deleteBtn(complete: boolean){
  this.isDeleted.emit(complete)
}

  constructor() { }

  ngOnInit(): void {
  }

}
