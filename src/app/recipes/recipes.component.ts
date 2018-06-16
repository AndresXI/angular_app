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

  constructor() { }

  ngOnInit() {
  }

  // vars 
  selectedRecipe: Recipe; 

  // methods 


}
