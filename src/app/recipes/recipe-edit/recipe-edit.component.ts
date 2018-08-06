import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number; 
  editMode = false; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // retreiving the id 
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; 
        // creating a new recipe not in edit mode
        this.editMode = params['id'] != null; // checking in wich mode we are 
      }
    ); 
  }

}
