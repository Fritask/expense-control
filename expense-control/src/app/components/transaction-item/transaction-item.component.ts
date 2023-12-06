import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ITransaction } from '../../shared/interfaces/transaction.interface';
import { CategoryIconComponent } from '../category-icon/category-icon.component';

@Component({
	selector: 'app-transaction-item',
	standalone: true,
	imports: [CommonModule, MatIconModule, CategoryIconComponent],
	templateUrl: './transaction-item.component.html',
	styleUrl: './transaction-item.component.scss',
})
export class TransactionItemComponent {
	@Input() transaction?: ITransaction;
	@Input() last?: boolean;

	setInstallmentText(transaction?: ITransaction) {
		return `${transaction?.installment_info?.amount_paid}/${transaction?.installment_info?.total_amount}`;
	}
}
