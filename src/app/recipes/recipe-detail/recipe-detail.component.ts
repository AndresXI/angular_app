import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // vars 
  @Input() recipe: Recipe; // getting this from recipes.component

}
