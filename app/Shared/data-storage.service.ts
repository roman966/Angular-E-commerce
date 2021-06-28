import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { RecipeService } from '../services/recipe.service';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private  recipeservice: RecipeService) { }

  

  storeRecipes() {
    const recipes = this.recipeservice.gettherecipes();
    console.log(recipes);
    this.http.put('https://ng-course-recipe-book-7efb7-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}


