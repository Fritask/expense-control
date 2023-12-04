import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetCardComponent } from '../../components/budget-card/budget-card.component';
import { ITransaction } from '../../shared/interfaces/transaction.interface';
import { MatIconModule } from '@angular/material/icon';
import { Categories } from '../../shared/enums/categories';
import { PaymentMethods } from '../../shared/enums/payment-methods';
import { TransactionItemComponent } from '../../components/transaction-item/transaction-item.component';
import { Animations } from '../../shared/animations/animations';
import { PaymentSources } from '../../shared/enums/payment-sources';
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
	totalSpentMain: number = 0;
	totalSpentMonthly: number = 0;
	mainTransactionsVisible: boolean = true;
	monthlyTransactionsVisible: boolean = true;
	mainTransactions: ITransaction[] = [];
	monthlyTransactions: ITransaction[] = [];

	constructor(private _transaction: TransactionService) {}

	ngOnInit(): void {
		this.getTransactions();

		this.setTotalSpent();
	}

	setTotalSpent() {
		this.totalSpentMain = this.mainTransactions.reduce(
			(accumulator: number, transaction: ITransaction) => {
				return accumulator + transaction.total_value;
			},
			0
		);

		this.totalSpentMonthly = this.monthlyTransactions.reduce(
			(accumulator: number, transaction: ITransaction) => {
				return accumulator + transaction.total_value;
			},
			0
		);
	}

	getTransactions() {
		this._transaction.getTransactions().subscribe(
			(response) => {
				if (response.data.length) {
					this.mainTransactions = response.data.filter(
						(item: ITransaction) => item.monthly === false
					);

					this.monthlyTransactions = response.data.filter(
						(item: ITransaction) => item.monthly === true
					);
				}
			},
			(err: any) => {
				alert('error');
			}
		);
	}
}
