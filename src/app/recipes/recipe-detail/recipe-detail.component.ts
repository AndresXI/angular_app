import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  // vars
  recipe: Recipe; 
  id: number; 

  // implements the recipe service class 
  constructor(private recipeService: RecipeService,
      private route: ActivatedRoute, // information about our current route 
      private router: Router // used to navigate a route 
      ) { }

  ngOnInit() {
    // retreiving the id 
    this.route.params.subscribe(
      (params: Params) => {
        // reacting to a new id, reacts everytime we click on a diferent id 
        this.id = +params['id']; 
        this.recipe = this.recipeService.getRecipe(this.id); 
      }
    ); 
  }

  // methods
  onAddToShoppingList() {
    // selected ingridients are passed to the recipeService through the method 
    // addIngridientsToShoppingList
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingridients); 
  }

  onEditRecipe() {
      // targeting the path we want to go 
      this.router.navigate(['edit'], {relativeTo: this.route}); 
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id); // delete recipe 
    this.router.navigate(['/recipes']); // redirect user 
  }

}
