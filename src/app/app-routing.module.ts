import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from '@angular/router'; 
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from './auth/auth-guard.service';


// registering our routes 
const appRoutes: Routes = [
    // here each javascript object represents a route 
    { path: "", redirectTo: "/recipes", pathMatch: "full"},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component:  SignupComponent}, 
    { path: 'signin', component: SigninComponent}  
]; 

@NgModule({
    // here our routes are now configured
    imports: [RouterModule.forRoot(appRoutes)], 
    // export our router module to the app module 
    exports: [RouterModule]
})
// this class will bundle all of the routing functinality 
export class AppRoutingModule {

}