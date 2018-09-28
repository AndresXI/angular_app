import { Injectable } from "@angular/core"; 
import { Http, Response } from "@angular/http"; 
import { RecipeService } from "../recipes/recipe.service"; 
import { Recipe } from '../recipes/recipe.model'; 
import { map } from "rxjs/operators"; 



@Injectable()
export class DataStorageService {
    // send a put request to firebase 
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        // constantly override data on firebase, second parameter is the things we
        // want to put in our data base 
        return this.http.put("https://recipe-book-ng-b1e34.firebaseio.com/recipes.json", this.recipeService.getRecipes()); 
    }

    // getting data from firebase backend 
    getRecipes() { // firebase returns an observable
       return this.http.get("https://recipe-book-ng-b1e34.firebaseio.com/recipes.json")
        .pipe(map(
            (response: Response) => {
                const recipes: Recipe[] = response.json(); // we get back an array of recipes
                // check if each recipe has an ingridient property 
                for (let recipe of recipes) {
                    if(!recipe["ingridients"]) {
                        console.log(recipe); 
                        // add the propery if it does not have it 
                        recipe["ingridients"] = []; 
                    }
                }
                return recipes; 
            }
        ))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes); // Replace existing recipes,
            }
        ); 
    }
}