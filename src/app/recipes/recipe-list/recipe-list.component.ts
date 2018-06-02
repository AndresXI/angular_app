import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model"; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // variables
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); // passing this to the recipe.component
  recipes: Recipe[] = [
    // creating a new Recipe object
    new Recipe("Test Recipe", "This is just a test", "https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d"),
    new Recipe("Test Recipe number2", "This is just a second test", "https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false")
  ]; 

  // methods 
  onRecipeSelected(selectedReci: Recipe) {
    this.recipeWasSelected.emit(selectedReci); 
  }

}
