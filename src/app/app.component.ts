import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature = "recipe"; 
  
  // getting the firebase object initialized when the app runs 
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDwqgKzbBXya_JntKXk2b1iK0YNJjjUnlU",
      authDomain: "recipe-book-ng-b1e34.firebaseapp.com",
    }); 
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature; 
  }

}
