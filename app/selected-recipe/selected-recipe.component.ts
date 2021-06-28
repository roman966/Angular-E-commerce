import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-selected-recipe',
  templateUrl: './selected-recipe.component.html',
  styleUrls: ['./selected-recipe.component.css']
})
export class SelectedRecipeComponent implements OnInit {

  constructor(private slservice: ShoppingListService, private recipeservice: RecipeService, private route: ActivatedRoute,
    private router: Router) { }

  item: Recipe
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.setitem(this.id);

      }
    )
    
  }

  toshoppinglist() {
    for (let item of this.item.ingredients) {
      this.slservice.ingredients.push(item);
    }
  }

  setitem(id) {
    this.item = this.recipeservice.getrecipe(id);
 
  }

  OnDelete() {
    this.recipeservice.recipes.splice(this.id, 1);

    this.router.navigate(['../'],{relativeTo:this.route})
  }


}

