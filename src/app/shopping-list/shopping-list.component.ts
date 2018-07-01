import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';  

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // injecting our shopping-list service 
  constructor(private shoppingListService: ShoppingListService) { }

  // on practice all initialization should be initialized here 
  ngOnInit() {
    this.ingridients = this.shoppingListService.getIngridients(); 
    // updating our ingridients array after the user add new items 
    this.shoppingListService.ingridientsUpdated.subscribe(
      (ingridients: Ingridient[]) => {
        this.ingridients = ingridients; 
      }
    ); 
  }

  //variabels 
  ingridients: Ingridient[]; 

}
