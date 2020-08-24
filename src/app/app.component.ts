import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes'
  quotes:Quote[] = [
    new Quote(1, 'Oliver Otiato', 'It is what it is',new Date(2020,8,21)),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2020,3,14)),
    // new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2020,3,14)),
    // new Quote(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2020,3,14)),
    // new Quote(5,'Solve math homework','Damn Math',new Date(2020,3,14)),
    // new Quote(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2020,3,14)),
  ];
}