import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { INavItem } from '../../shared/interfaces/nav-item.interface';
import { Router } from '@angular/router';
import { HeaderToolbarService } from '../../shared/services/header-toolbar/header-toolbar.service';

@Component({
	selector: 'app-bottom-navigation',
	standalone: true,
	imports: [CommonModule, MatIconModule],
	templateUrl: './bottom-navigation.component.html',
	styleUrl: './bottom-navigation.component.scss',
})
export class BottomNavigationComponent implements OnInit {
	navItems: INavItem[] = [
		{
			icon: 'home',
			text: 'Home',
			path: '/home',
		},
		{
			icon: 'bar_chart',
			text: 'Graph',
			path: '/graph',
		},
		{
			icon: 'swap_horiz',
			text: 'Transactions',
			path: '/transactions',
		},
		{
			icon: 'view_module',
			text: 'Categories',
			path: '/categories',
		},
		{
			icon: 'settings',
			text: 'Settings',
			path: '/settings',
		},
	];

	selectedItem?: INavItem = undefined;

	constructor(
		private _router: Router,
		private _headerToolbar: HeaderToolbarService
	) {}

	ngOnInit(): void {
        const startingItem = this.navItems[2];

		this.selectedItem = startingItem;
        this.setPageTitle(startingItem.text);
	}

	selectItem(navItem: INavItem) {
		this.selectedItem = navItem;

        this.setPageTitle(navItem.text);
		this._router.navigate([navItem.path], { skipLocationChange: true });
	}

    setPageTitle(title: string) {
        this._headerToolbar.pageTitle = title;
    }
}
