import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
	CategoryIcons,
	CategoryColors,
} from '../../shared/enums/category-settings';
import { ITransaction } from '../../shared/interfaces/transaction.interface';

@Component({
	selector: 'app-transaction-item',
	standalone: true,
	imports: [CommonModule, MatIconModule],
	templateUrl: './transaction-item.component.html',
	styleUrl: './transaction-item.component.scss',
})
export class TransactionItemComponent {
	@Input() transaction?: ITransaction;
	@Input() last?: boolean;

	getCategoryIcon() {
		return this.transaction
			? CategoryIcons[this.transaction.category]
			: 'image';
	}

	setIconStyle() {
		const category = this.transaction?.category;

		return category
			? {
					'background-color': CategoryColors[category] + '4D',
					color: CategoryColors[category],
			  }
			: null;
	}
}
