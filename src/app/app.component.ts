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
    {id:1, name:'Once bitten twice shy'},
    {id:2,name:'No man is an Island'},
    {id:3,name:'God is the way'},
    {id:4,name:'Act as if what you do makes a difference. Yes It Does.'},
    // {id:5,name:'Solve math homework'},
    // {id:6,name:'Plot my world domination plan'},
  ];
}
