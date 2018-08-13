import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { FormGroup, FormControl, FormArray } from '../../../../node_modules/@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup; 
  id: number; 
  editMode = false; 

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    // retreiving the id 
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; 
        // creating a new recipe not in edit mode
        this.editMode = params['id'] != null; // checking in wich mode we are on
        // call this form whenever we change routes or the ID
        this.initForm(); 
      }
    ); 
  }

  // initializing our form 
  private initForm() {
    let recipeName = ""; 
    let recipeImagePath = ""; 
    let recipeDescription = ""; 
    let recipeIngridients = new FormArray([]); 
    // pupulate the field if in edit mode
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id); 
      recipeName = recipe.name;
      recipeImagePath = recipe.imgPath; 
      recipeDescription = recipe.description; 
      // check if we have any ingridients 
      if (recipe['ingridients']) { // checking if its defined 
        for (let ingridients of recipe.ingridients) {
          recipeIngridients.push(
            new FormGroup({ // has two pairs 
              'name': new FormControl(ingridients.name),
              'amount': new FormControl(ingridients.amount)
            })
          ); 
        }
      }
    } 
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath), 
      'description': new FormControl(recipeDescription),
      'ingridients': recipeIngridients
    }); 
  }

  onSubmit() {
    console.log(this.recipeForm); 
  }

} // end component class 
