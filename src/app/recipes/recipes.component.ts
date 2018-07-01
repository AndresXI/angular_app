import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'; 
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // RecipeService is available to all recipe related components 
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => { 
        // getting the recipe we selected with the click listener 
        this.selectedRecipe = recipe; 
      }
    ); 
  }

  // vars 
  selectedRecipe: Recipe; 

  // methods 


}
