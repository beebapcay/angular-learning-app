import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
    this.slService.onIngredientAdded(newIngredient);
  }
}
