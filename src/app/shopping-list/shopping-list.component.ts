import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';  
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
   //variabels 
  ingridients: Ingridient[]; 
  private subscription: Subscription; 

  // injecting our shopping-list service 
  constructor(private shoppingListService: ShoppingListService) { }

  // on practice all initialization should be initialized here 
  ngOnInit() {
    this.ingridients = this.shoppingListService.getIngridients(); 
    // updating our ingridients array after the user add new items 
    this.subscription = this.shoppingListService.ingridientsUpdated.subscribe(
      (ingridients: Ingridient[]) => {
        this.ingridients = ingridients; 
      }
    ); 
  }

  ngOnDestroy() {
    // used to prevent any memmory leaks 
    this.subscription.unsubscribe(); 
  }

  onEditItem(index: number) {
    this.shoppingListService.startEdit.next(index); // listenning to this event 
  }

}
