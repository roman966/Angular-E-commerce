import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredients } from '../Shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private slservice: ShoppingListService) { }

  ingredients: Ingredients[];

  

  ngOnInit(): void {

    this.ingredients = this.slservice.getIngredients();
    this.slservice.Ingredients.subscribe(

      (ingridient: Ingredients) => {
        this.ingredients.push(ingridient);

      }

    )
    
  }


OnEdit(index: number) {
    this.slservice.toedititem.emit(index);
  }

}
