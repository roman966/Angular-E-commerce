import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  Ingredients = new EventEmitter<Ingredients>()

  toshoppinglist = new EventEmitter<Ingredients[]>()

  toedititem = new EventEmitter<number>()

  toupdate = new EventEmitter<{ Ingredients: Ingredients, id: number } >()


  constructor(private recipeservice: RecipeService) { }

  ingredients: Ingredients[] = [{
    name: 'Apple',
    amount: 10
  } ,   
    {
    name: 'Orange',
    amount: 2
  }

  ];

  getIngredients() {
    return this.ingredients;
  }

  getitembyid(index) {
    return this.ingredients[index];
  }

 


}
