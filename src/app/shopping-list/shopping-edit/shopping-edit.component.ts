import { Component, OnInit, ElementRef, ViewChild, Output, } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model'; 
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  // vars 
  @ViewChild('nameInput') nameInputRef: ElementRef; 
  @ViewChild('amountInput') amountInputRef: ElementRef; 
  // sending this to the shopping list component



  // methods 
  addItem() {
    const newIngridient = new Ingridient(
      // setting the values from the user input 
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value); 
      this.shoppingListService.addIngridient(newIngridient); 
      }

}
