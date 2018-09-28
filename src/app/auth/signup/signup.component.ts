import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  /** Inject on service */
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email; 
    const password = form.value.password; 

    // call the auth service
    this.authService.signupUser(email, password); 
    
  }

}
