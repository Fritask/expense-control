import { Injectable } from '@angular/core';
import {
	Categories,
	CategoriesColors,
	CategoriesIcons,
} from '../../enums/categories';
import { Colors } from '../../enums/colors';
import { ICategory } from '../../interfaces/category.interface';

@Injectable({
	providedIn: 'root',
})
export class CategoryService {
	private _categories: ICategory[] = Object.values(Categories).map(
		(element: Categories) => {
			return {
				name: element,
				color: this.getCategoryColor(element),
				icon: this.getCategoryIcon(element),
			};
		}
	);

	constructor() {}

	getCategoryIcon(category?: Categories): CategoriesIcons {
		return category ? CategoriesIcons[category] : CategoriesIcons.general;
	}

	getCategoryColor(category?: Categories): CategoriesColors {
		return category ? CategoriesColors[category] : CategoriesColors.general;
	}

	get categories(): ICategory[] {
		return this._categories;
	}
}
