import * as firebase from 'firebase';


export class AuthService {

    /** String for the token **/
    token: string; 


    /** Firebse sign up user method. 
     * @param email user email 
     * @param password user password 
     **/
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
            response => {
                firebase.auth().currentUser.getIdToken()
                    .then(
                        // returns the token as a string 
                        (token: string) => this.token = token
                    )
            }
        )
        .catch (
            error => console.log(error)
        ); 

    }

    getToken() {
        // gets the token back asynchronously --> promise
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        );
        // return the token as a string 
        return this.token; 
    }
}