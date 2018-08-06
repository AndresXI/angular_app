import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model'; 


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  ngOnInit() {
    
  }

  // vars 
  // here input receives data 
  @Input() recipe: Recipe; // making it bindable to the recipe-list comp
  @Input() index: number; 
    
}
