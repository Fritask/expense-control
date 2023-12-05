import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { INavItem } from '../../shared/interfaces/nav-item.interface';
import { Router } from '@angular/router';

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
            text: 'Category',
            path: '/categories',
        },
        {
            icon: 'settings',
            text: 'Settings',
            path: '/settings',
        },
    ];

    selectedItem?: INavItem = undefined;

    constructor(private _router: Router) {}

    ngOnInit(): void {
        this.selectedItem = this.navItems[2];
    }

    selectItem(navItem: INavItem) {
        this.selectedItem = navItem;

		this._router.navigate([navItem.path], { skipLocationChange: true })
    }
}
