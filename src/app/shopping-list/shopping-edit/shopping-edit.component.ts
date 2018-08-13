import { Component, OnInit, Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model'; 
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Subscription } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("editForm") slForm: NgForm; 
  subscription: Subscription; 
  editMode = false; 
  editItemIndex: number; 
  editedItem: Ingridient; 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEdit.subscribe(
      (index: number) => { // runs everytime we get new info 
        // getting information about our item 
        this.editItemIndex = index; 
        this.editMode = true; 
        this.editedItem = this.shoppingListService.getIngridient(index); 
        // updating our form 
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        }); 
      }
    ); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

  // methods 
  addItem(form: NgForm) {   
    const value = form.value; 
    const newIngridient = new Ingridient(value.name, value.amount);
    if(this.editMode) {
      // if in edit mode just update
      this.shoppingListService.updateIngridient(this.editItemIndex, newIngridient); 
    } else {
      // if not in edit mode than create a new Ingridient 
      this.shoppingListService.addIngridient(newIngridient); 
    }
    this.editMode = false; 
    form.reset(); 
  }

  onClear() {
    this.slForm.reset(); 
    this.editMode = false; 
  }

  onDelete() {
    this.shoppingListService.deleteIngridient(this.editItemIndex); 
    this.onClear(); 
  }
    
}
