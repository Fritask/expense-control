import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TransactionService } from '../../shared/services/transaction.service';

@Component({
	selector: 'app-budget-card',
	standalone: true,
	imports: [CommonModule, MatProgressBarModule],
	templateUrl: './budget-card.component.html',
	styleUrl: './budget-card.component.scss',
})
export class BudgetCardComponent implements OnInit {
	totalSpent: number = 0;
	totalSpentPercentage: number = 0;
	remainingBudget: number = 0;
	totalBudget: number = 6715.35;

	constructor(private _transaction: TransactionService) {
		this.totalSpent = _transaction.totalSpent
			? _transaction.totalSpent?.total
			: 0;

		this.remainingBudget = this.totalBudget - this.totalSpent;
		this.totalSpentPercentage = (100 * this.totalSpent) / this.totalBudget;
	}

	ngOnInit() {
		// alert(this.totalSpent);
	}
}
