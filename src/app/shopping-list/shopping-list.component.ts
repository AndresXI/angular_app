import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //variabels 
  ingridients: Ingridient[] = [
    new Ingridient("Apples", 5),
    new Ingridient("Tomatoes", 10)
  ]; 

  // methods 
  onIngridientAdded(ingridientAdded: Ingridient) {
    this.ingridients.push(ingridientAdded); 
  }

}
