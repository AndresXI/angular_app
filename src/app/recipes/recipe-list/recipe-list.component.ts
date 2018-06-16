import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model"; 
import { RecipeService } from '../recipe.service'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // we must inject our recipeService
  constructor(private recipeService: RecipeService) { 

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes(); 
  }

  // variables
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); // passing this to the recipe.component
  recipes: Recipe[]; 

  // methods 
  onRecipeSelected(selectedReci: Recipe) {
    this.recipeWasSelected.emit(selectedReci); 
  }


}
