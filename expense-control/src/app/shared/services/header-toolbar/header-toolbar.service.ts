import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class HeaderToolbarService {
	private _pageTitle: string = 'Expense Control';

	constructor() {}

	get pageTitle(): string {
		return this._pageTitle;
	}

	set pageTitle(title: string) {
		this._pageTitle = title;
	}
}
