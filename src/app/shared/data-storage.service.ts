import { Injectable } from "@angular/core"; 
import { Http } from "@angular/http"; 
import { RecipeService } from "../recipes/recipe.service"; 

@Injectable()
export class DataStorageService {
    // send a put request to firebase 
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        // constantly override data on firebase, second parameter is the things we
        // want to put in our data base 
        return this.http.put("https://recipe-book-ng-b1e34.firebaseio.com/recipes.json", this.recipeService.getRecipes()); 
    }
}