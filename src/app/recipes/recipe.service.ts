import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        // creating a new Recipe object
        new Recipe("Test Recipe", "This is just a test", "https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d"),
        new Recipe("Test Recipe number2", "This is just a second test", "https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false")
      ]; 
    
    getRecipes() {
        // here we only get a copy of our array 
        return this.recipes.slice(); 
    }

}