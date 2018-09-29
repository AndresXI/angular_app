import { ReactiveFormsModule } from '@angular/forms';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedMoudlue } from '../shared/shared.module';

@NgModule({
  declarations: [
    // all recipe related feature modules
    // CANNOT DUPLICATE DECLARATIONS 
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ],
  // These imports are recognized by angular
  imports: [
    // Gives access to common directives --> Comon Module 
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedMoudlue
  ]
}) // this turns this class into a module
/** Recipe Module that will hold all the recipies related feature **/
export class RecipesModule {}