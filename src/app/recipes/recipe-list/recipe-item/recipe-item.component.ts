import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model'; 


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // vars 
  // here input receives data 
  @Input() recipe: Recipe; // making it bindable to the recipe-list comp
  // sending this variable to the recipe-list comp, custom event emmiter 
  @Output() recipeSelected = new EventEmitter<void>(); 


  // methods 
  onSelected() {
    this.recipeSelected.emit(); 
  }
}
