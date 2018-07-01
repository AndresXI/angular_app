import { Ingridient } from '../shared/ingridient.model'; 
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingridientsUpdated = new EventEmitter<Ingridient[]>(); 
    // make sure to make it private only this class should 
    // have access to this property 
    private ingridients: Ingridient[] = [
        new Ingridient("Apples", 5),
        new Ingridient("Tomatoes", 10)
      ]; 

    getIngridients() {
        // returns a copy of the array 
        return this.ingridients.slice(); 
    }  

    addIngridient(ingridient: Ingridient) {
        this.ingridients.push(ingridient); 
        // getting the right ingridients array thats populated correctly 
        this.ingridientsUpdated.emit(this.ingridients.slice()); 
    }

    addIngridients(ingridients: Ingridient[]) {
        this.ingridients.push(...ingridients); // spread operator 
        // passing a copy to update our ingridients array 
        this.ingridientsUpdated.emit(this.ingridients.slice()); 
    }
    

}