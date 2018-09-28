import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /** Sign in method */
  onSignin(form: NgForm) {
    const email = form.value.email; 
    const password = form.value.password; 
    // pass paramters to the auth service 
    this.authService.singinUser(email, password); 
  }


}
