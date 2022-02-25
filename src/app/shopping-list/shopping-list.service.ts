import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ing: Ingredient) {
    if (this.ingredients.find((i) => i.name === ing.name)) {
      this.ingredients.find((i) => i.name === ing.name).amount += ing.amount;
    } else {
      this.ingredients.push(ing);
    }
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ing) => {
      if (this.ingredients.find((i) => i.name === ing.name)) {
        this.ingredients.find((i) => i.name === ing.name).amount += ing.amount;
      } else {
        this.ingredients.push(ing);
      }
    });
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
