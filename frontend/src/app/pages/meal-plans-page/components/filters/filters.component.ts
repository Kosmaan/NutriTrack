import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { MealService } from 'src/app/services/Meal.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  categories: Category[] = [];

  @Output() categorySelected = new EventEmitter<string>();

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.mealService.getAllCategories().subscribe(
      (data: Category[]) => {
        console.log('Categories:', data);
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onCategoryClick(category: string): void {
    this.categorySelected.emit(category);
  }
}
