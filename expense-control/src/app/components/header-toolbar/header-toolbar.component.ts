import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderToolbarService } from '../../shared/services/header-toolbar/header-toolbar.service';

@Component({
	selector: 'app-header-toolbar',
	standalone: true,
	imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
	templateUrl: './header-toolbar.component.html',
	styleUrl: './header-toolbar.component.scss',
})
export class HeaderToolbarComponent {

	constructor(private _headerToolbar: HeaderToolbarService) {
    }

	get headerToolbar() {
		return this._headerToolbar;
	}
}
