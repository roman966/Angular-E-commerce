import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  selectedrecipe: Recipe;
  ngOnInit(): void {

    this.recipeService.recipeselected.subscribe(

      (recipe: Recipe) => {
        this.selectedrecipe = recipe;
      }

    )
  }
}
