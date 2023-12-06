import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { CategoryService } from '../../shared/services/category/category.service';
import { ICategory } from '../../shared/interfaces/category.interface';
import { CategoryIconComponent } from '../../components/category-icon/category-icon.component';

@Component({
	selector: 'app-categories',
	standalone: true,
	imports: [CommonModule, MatGridListModule, CategoryIconComponent],
	templateUrl: './categories.component.html',
	styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
	categories: ICategory[] = [];
	constructor(private _category: CategoryService) {
		this.categories = this._category.categories;
	}
}
