import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // implements the recipe service class 
  constructor(private recipeService: RecipeService) {
    
   }

  ngOnInit() {

  }

  // vars 
  @Input() recipe: Recipe; // getting this from recipes.component.ts

  onAddToShoppingList() {
    // selected ingridients are passed to the recipeService through the method 
    // addIngridientsToShoppingList
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingridients); 
  }

}
