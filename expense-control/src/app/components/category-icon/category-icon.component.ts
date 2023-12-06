import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../shared/services/category/category.service';
import { Categories } from '../../shared/enums/categories';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-category-icon',
	standalone: true,
	imports: [CommonModule, MatIconModule],
	templateUrl: './category-icon.component.html',
	styleUrl: './category-icon.component.scss',
})
export class CategoryIconComponent {
	@Input() category?: Categories;
	@Input() bigIcon: boolean = false;
	@Input() showText: boolean = false;

	constructor(private _category: CategoryService) {}

	getCategoryIcon() {
		return this._category.getCategoryIcon(this.category);
	}

	setIconStyle() {
		const categoryColor = this._category.getCategoryColor(this.category);

		return this.category
			? {
					'background-color': categoryColor + '4D',
					color: categoryColor,
			  }
			: null;
	}
}
