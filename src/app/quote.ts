export class Quote {
    id: number;
    nameWriter: string;
    quoteContent: string;
    authorName :string;
    completeDate: Date;
    upvote : number;
    downvote :number;
    
    
constructor(id: number, nameWriter: string, quoteContent: string, authorName: string, completeDate: Date, upvote:number, downvote:number){
    this.id =id;
    this.nameWriter = nameWriter;
    this.quoteContent = quoteContent;
    this.authorName = authorName;
    this.completeDate = completeDate;
    this.upvote = upvote;
    this.downvote = downvote;
    
}
}

