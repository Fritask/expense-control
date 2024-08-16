import {
	Categories,
	CategoriesIcons,
	CategoriesColors,
} from '../enums/categories';

export interface ICategory {
	name: Categories;
	icon: CategoriesIcons;
	color: CategoriesColors;
}
