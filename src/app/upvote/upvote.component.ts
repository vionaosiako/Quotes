import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  numberOfupvote: number = 0;

  like(){
    this.numberOfupvote++;
  }

  numberOfdownvote: number =0;
  
  dislike(){
    this.numberOfdownvote++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
