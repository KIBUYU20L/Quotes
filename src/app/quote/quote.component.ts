import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'Quotes'
  quotes:Quote[] = [
    new Quote(1, 'Oliver Otiato', 'It is what it is',new Date(2020,8,21)),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2020,3,14)),
    // new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2020,3,14)),
    // new Quote(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2020,3,14)),
    // new Quote(5,'Solve math homework','Damn Math',new Date(2020,3,14)),
    // new Quote(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2020,3,14)),
  ];
  Quote: any;

  toggleDetails(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
