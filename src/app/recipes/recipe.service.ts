import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingridient } from "../shared/ingridient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

// Injecting a service into a service 
@Injectable() 
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>(); 
    // injecting our shopping list Service 
    constructor(private slService: ShoppingListService) {

    }

    private recipes: Recipe[] = [
        // creating a new Recipe object
        new Recipe(
            "Test Recipe", 
            "This is just a test", 
            "https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d",
            [
                new Ingridient("Meat", 1),
                new Ingridient("French Fries", 20)
            ]),
        new Recipe("Test Recipe number2", 
        "This is just a second test", 
        "https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
         [
             new Ingridient('Buns', 2), 
             new Ingridient('Meat', 1)
         ])
      ]; 

    
    getRecipes() {
        // here we only get a copy of our array 
        return this.recipes.slice(); 
    }

    // loading a recipe with an id 
    getRecipe(index: number) {
        return this.recipes[index]; // returns the js object 
    }

    addIngridientsToShoppingList(ingridients: Ingridient[]) {
        this.slService.addIngridients(ingridients); 
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe); 
        // we update our recipe with the subscribe event 
        this.recipesChanged.next(this.recipes.slice()); 
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe; 
        this.recipesChanged.next(this.recipes.slice()); 
    }

}