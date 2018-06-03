import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model'; 


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // vars 
  @ViewChild('nameInput') nameInputRef: ElementRef; 
  @ViewChild('amountInput') amountInputRef: ElementRef; 
  // sending this to the shopping list component
  @Output() ingridientAdded = new EventEmitter<Ingridient>(); 


  // methods 
  addItem() {
    const newIngridient = new Ingridient(
      // setting the values from the user input 
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value); 
      this.ingridientAdded.emit(newIngridient); 

      }

}
