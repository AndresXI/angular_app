import { AuthService } from './../../auth/auth.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http'; 
import { DataStorageService } from '../../shared/data-storage.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorage: DataStorageService, 
    private authService: AuthService) { }

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
  
  onFetchData() {
    this.dataStorage.getRecipes(); 
  }

  onLogout() {
    this.authService.logout(); 
  }

  isAuthenticated() {
    return this.authService.isAuthenticated(); 
  }


} // End header component 
