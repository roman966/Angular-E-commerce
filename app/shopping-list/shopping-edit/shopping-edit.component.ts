import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredients } from '../../Shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slservice: ShoppingListService) { }

  @ViewChild('f') slform: NgForm;

  @ViewChild('form') form : ElementRef

  id: number;

  ingredient: Ingredients;
  ingridients: Ingredients[];
  editmode: boolean = false;

  ngOnInit(): void {

    this.slservice.toedititem.subscribe(
      (id: number) => {

        this.id = id;
       
        this.ingredient = this.slservice.getitembyid(this.id);

        this.editmode = true;

        this.slform.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount
        }
         
        )

      },
       this.slservice.toupdate.subscribe(
         (ingredients: Ingredients) => {
           this.slservice.ingredients.splice(this.id, 1, ingredients);
           this.editmode = false;
         }

       )
    )

  }

  Onadd(form: NgForm) {
    if (!this.editmode) {
      this.slservice.Ingredients.emit(form.value);
    }
    else {
      this.slservice.toupdate.emit(form.value);
    }
   
  }

  OnClear(form) {
    form.reset();
    this.editmode = false;

  }

  OnDelete() {
    this.OnClear(this.slform);
    console.log(this.id);
    this.slservice.ingredients.splice(this.id, 1);
  }

}
