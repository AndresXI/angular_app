import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model"; 
import { RecipeService } from '../recipe.service'; 
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // we must inject our recipeService
  constructor(private recipeService: RecipeService, 
    private router: Router, 
    private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes(); 
  }

  // variables
  recipes: Recipe[]; 

  // methods 
  onNewRecipe() {
    // targeting the path we want to go 
    this.router.navigate(['new'], {relativeTo: this.route}); 
  }

}
