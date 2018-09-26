import { Component } from '@angular/core';
import { Response } from '@angular/http'; 
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {
  }

  onSave() {
    this.dataStorage.storeRecipes() // store data on firebase 
      .subscribe(
        (response: Response) => {
          console.log(response); 
        }
      ); 
  }


}
