import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../Shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipeselected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Gorio Parucini', " A test Recipe", "assets/images/image1.jpg",
     [
       new Ingredients('Meat', 20),
       new Ingredients('Loaf',2)
     ]

    ),
    new Recipe('Esteban Capuli', "Another Test Recipe", "assets/images/image2.jpg",

      [
        new Ingredients('Bun', 20),
        new Ingredients('Wheat-soda', 2),
        new Ingredients('soda', 2)
      ]


    ),
    
  ]

  gettherecipes() {
    return this.recipes;
  }

  getrecipe(id) {
    return this.recipes[id];
  }
}
