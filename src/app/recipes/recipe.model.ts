import { Ingridient } from "../shared/ingridient.model";

// Data model for a recipe
export class Recipe {
    public name: string; 
    public description: string; 
    public imgPath: string; 
    public ingridients: Ingridient[]; 

    constructor(name: string, desc: string, imgPath: string, ingridients: Ingridient[]) {
        this.name = name; 
        this.description = desc; 
        this.imgPath = imgPath; 
        this.ingridients = ingridients; 
    }
}