import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetCardComponent } from '../../components/budget-card/budget-card.component';
import { MatIconModule } from '@angular/material/icon';
import { TransactionItemComponent } from '../../components/transaction-item/transaction-item.component';
import { Animations } from '../../shared/animations/animations';
import { TransactionService } from '../../shared/services/transaction.service';

@Component({
	selector: 'app-transactions',
	standalone: true,
	imports: [
		CommonModule,
		BudgetCardComponent,
		TransactionItemComponent,
		MatIconModule,
	],
	templateUrl: './transactions.component.html',
	styleUrl: './transactions.component.scss',
	animations: [Animations.fadeInOut],
})
export class TransactionsComponent implements OnInit {
	mainTransactionsVisible: boolean = true;
	monthlyTransactionsVisible: boolean = true;

	constructor(private _transaction: TransactionService) {}

	ngOnInit(): void {}

	get transaction(): TransactionService {
		return this._transaction;
	}
}
