import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model'; 
import { RecipeService } from '../../recipe.service'; 


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // injecting our recipeService
  constructor(private recipeServie: RecipeService) { }

  ngOnInit() {
    
  }

  // vars 
  // here input receives data 
  @Input() recipe: Recipe; // making it bindable to the recipe-list comp

  // methods 
  onSelected() {
      this.recipeServie.recipeSelected.emit(this.recipe); 
   }
    
}
