import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { MealService } from 'src/app/services/Meal.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  categories: Category[] = [];
  selectedCategories: Set<string> = new Set();

  @Output() filtersApplied = new EventEmitter<string[]>();
  @Output() sortChanged = new EventEmitter<string>();

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.mealService.getAllCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onCategoryClick(category: string): void {
    if (this.selectedCategories.has(category)) {
      this.selectedCategories.delete(category);
    } else {
      this.selectedCategories.add(category);
    }
  }

  sortTitle(order: string): void {
    this.sortChanged.emit(order);
  }

  applyFilters(): void {
    this.filtersApplied.emit(Array.from(this.selectedCategories));
  }

  resetFilters(): void {
    this.selectedCategories.clear();
    this.filtersApplied.emit([]);
  }
}
