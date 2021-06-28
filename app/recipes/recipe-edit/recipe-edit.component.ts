import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Ingredients } from '../../Shared/ingredients.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editmode = false;

  RecipeForm: FormGroup

  constructor(private route: ActivatedRoute, private recipeservice: RecipeService, private router: Router) { }

  OnSubmit() {
    const recipe = new Recipe(
      this.RecipeForm.value.name,
      this.RecipeForm.value.Description,
      this.RecipeForm.value.ImageUrl,
      this.RecipeForm.value.ingredients
    )
    if (!this.editmode) {
      this.recipeservice.recipes.push(recipe);
    }
    else {
      this.recipeservice.recipes.splice(this.id, 1, recipe);
    }

    this.OnCancel();
    
  }
  ngOnInit(): void {
     this.route.params.subscribe(
      (params: Params) => {
         this.id = params['id'];
         console.log(params);
        this.editmode = params['id'] != null
        this.forminit();
      }
    )
  }

  private forminit() {
    let recipeName = '';
    let recipeDescription = '';
    let imagepath = '';
    let ingredients = new FormArray([]);


    if (this.editmode) {
      const recipe = this.recipeservice.getrecipe(this.id);
        recipeName = recipe.name,
        recipeDescription = recipe.description,
        imagepath = recipe.imagePath
      if (recipe['ingredients']) {
        for (let item of recipe.ingredients) {
          ingredients.push(
            new FormGroup(
              {
                'name': new FormControl(item.name),

                'amount': new FormControl(item.amount)

              }
          )

        )
      }

    }
        
  }
       this.RecipeForm = new FormGroup(
        {
          'name': new FormControl(recipeName),

          'Description': new FormControl(recipeDescription),

          'ImageUrl': new FormControl(imagepath),

          'ingredients': ingredients
        }

      )


  }

  get controls() {
    return (<FormArray>this.RecipeForm.get('ingredients')).controls;
  }


  OnAddNewIng() {
    (<FormArray>this.RecipeForm.get('ingredients')).push(

      new FormGroup(

        {
          'name': new FormControl(),
          'amount': new FormControl()
        }

      )

    )
  }

  OnCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

}
