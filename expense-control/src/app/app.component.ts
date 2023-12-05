import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import localePt from '@angular/common/locales/pt';
import { TransactionService } from './shared/services/transaction.service';

registerLocaleData(localePt);

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, BottomNavigationComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'pt-BR',
		},
	],
})
export class AppComponent implements OnInit {
	title = 'expense-control';

	constructor(private _transaction: TransactionService) {}

	ngOnInit(): void {
		this._transaction.arrangeTransactions();
	}
}
