import * as firebase from 'firebase';


export class AuthService {

    /** Firebse sign up user method */
    signupUser(email: string, password: string) {
        // creates a new user --> returns js promise
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        )
    }

    /** Firebse sign in user method */
    singinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            // returns the response if it was successful 
            response => console.log(response)
        )
        .catch (
            error => console.log(error)
        ); 

    }
}