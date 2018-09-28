import { AuthService } from './../auth/auth.service';
import { Injectable } from "@angular/core"; 
import { Http, Response } from "@angular/http"; 
import { RecipeService } from "../recipes/recipe.service"; 
import { Recipe } from '../recipes/recipe.model'; 
import { map } from "rxjs/operators"; 
import * as firebase from 'firebase'; 



@Injectable()
export class DataStorageService {
    // send a put request to firebase 
    constructor(private http: Http, 
        private recipeService: RecipeService, 
        private authService: AuthService) {}

    storeRecipes() {
        // constantly override data on firebase, second parameter is the things we
        // want to put in our data base 
        return this.http.put("https://recipe-book-ng-b1e34.firebaseio.com/recipes.json", 
        this.recipeService.getRecipes()); 
    }

    /** Gets the recipes from firebase. 
     * @returns http request from firebase as an observable. 
     **/
    getRecipes() { 
       // geting the token from firebase as a promise
       const token = this.authService.getToken(); 
      
        // because we are getting back a token we need to add a query paramter
        this.http.get("https://recipe-book-ng-b1e34.firebaseio.com/recipes.json?auth=" 
        + token)
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