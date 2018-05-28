import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model"; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // variables
  recipes: Recipe[] = [
    // creating a new Recipe object
    new Recipe("Test Recipe", "This is just a test", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg")
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
