import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';


/** This constant will hold all recipe related routes. */
const recipesRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent, children: [
        { path: "", component: RecipeStartComponent },
        { path: "new", component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ":id", component: RecipeDetailComponent },
        { path: ":id/edit", component: RecipeEditComponent, canActivate: [AuthGuard] }
        ]
    }, 
]


@NgModule({
    imports: [
        // every module in angular is a child module 
        // so you must add the .forChild property 
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {
    
}