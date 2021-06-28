import { Ingredients } from '../Shared/ingredients.model';

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredients [];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredients[]) {

    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

}
