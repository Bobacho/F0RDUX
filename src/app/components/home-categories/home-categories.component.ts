import { Component, output } from '@angular/core';

@Component({
  selector: 'app-home-categories',
  standalone: true,
  imports: [],
  templateUrl: './home-categories.component.html',
  styleUrl: './home-categories.component.scss'
})
export class HomeCategoriesComponent {
  showCategories = output<boolean>();
  categories: string[] = [
    "Entrega inmediata",
    "Entrega por telegram"
  ]
  showCategory = output<string>();

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }
  onShowCategories() {
    this.showCategories.emit(true);
    console.log("Emiting from app-categories");
  }
  offShowCategories() {
    this.showCategories.emit(false);
  }
}
