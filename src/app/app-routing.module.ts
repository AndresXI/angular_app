import { HomeComponent } from './home/home.component';

import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from '@angular/router'; 



/** registering our routes **/
const appRoutes: Routes = [
    // here each javascript object represents a route 
    // { path: "", redirectTo: "/recipes", pathMatch: "full"}
    { path: "", component: HomeComponent },
    // Lazily loading our recipies component --> only loaded if needed 
    {path: "recipes", loadChildren: './recipes/recipes.module#RecipesModule' }
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