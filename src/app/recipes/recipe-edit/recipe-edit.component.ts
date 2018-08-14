import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '../../../../node_modules/@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

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
      (params: Params) => { // reacting to the click event 
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
              'name': new FormControl(ingridients.name, Validators.required),
              'amount': new FormControl(ingridients.amount, [
                Validators.required, 
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          ); 
        }
      }
    } 
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required), 
      'description': new FormControl(recipeDescription, Validators.required),
      'ingridients': recipeIngridients
    }); 
  }

  onSubmit() {
    // configuring our new recipe --> add all the fields for a recipe 
    const newRecipe = new Recipe( // we get all the fields from the recipeForm.value 
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingridients']); 
    if (this.editMode) { // if in edit mode update recipe 
      this.recipeService.updateRecipe(this.id, newRecipe); 
    } else { // if not in edit mode than create a new recipe 
      this.recipeService.addRecipe(newRecipe); 
    }
    // console.log(this.recipeForm); 
  }

  onAddIngridient() {
    // we get the array and then push a new form group 
    (<FormArray>this.recipeForm.get('ingridients')).push(
      // we then push the form group of two controllers 
      new FormGroup({
        'name': new FormControl(null, Validators.required), 
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );

  } 



} // end component class  

