import { Ingridient } from '../shared/ingridient.model'; 
import { Subject } from '../../../node_modules/rxjs';

export class ShoppingListService {
    startEdit = new Subject<Number>(); 
    ingridientsUpdated = new Subject<Ingridient[]>(); 
    // make sure to make it private only this class should 
    // have access to this property 
    private ingridients: Ingridient[] = [
        new Ingridient("Apples", 5),
        new Ingridient("Tomatoes", 10)
      ]; 

    getIngridient(index: number) {
        // returinig the ingridient at this index 
        return this.ingridients[index]; 
    }  

    getIngridients() {
        // returns a copy of the array 
        return this.ingridients.slice(); 
    }  

    addIngridient(ingridient: Ingridient) {
        this.ingridients.push(ingridient); 
        // getting the right ingridients array thats populated correctly 
        this.ingridientsUpdated.next(this.ingridients.slice()); 
    }

    addIngridients(ingridients: Ingridient[]) {
        this.ingridients.push(...ingridients); // spread operator 
        // passing a copy to update our ingridients array 
        this.ingridientsUpdated.next(this.ingridients.slice()); 
    }

    // update ingridient 
    updateIngridient(index: number, newIngridient: Ingridient) {
        this.ingridients[index] = newIngridient; 
        this.ingridientsUpdated.next(this.ingridients.slice()); 
    }
    
    deleteIngridient(index: number) {
        // removing the ingridient 
        this.ingridients.splice(index, 1); 
        // passing a copy of the new ingridient array 
        this.ingridientsUpdated.next(this.ingridients.slice()); 
    }

}