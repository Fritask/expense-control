import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetCardComponent } from '../../components/budget-card/budget-card.component';
import { ITransaction } from '../../shared/interfaces/transaction.interface';
import { Categories } from '../../shared/enums/categories';
import { PaymentMethods } from '../../shared/enums/payment-methods';
import { TransactionItemComponent } from '../../components/transaction-item/transaction-item.component';

@Component({
    selector: 'app-transactions',
    standalone: true,
    imports: [CommonModule, BudgetCardComponent, TransactionItemComponent],
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
    transactions: ITransaction[] = [
        {
            description: 'Jantinha do João',
            total_value: 34,
            date: '2023-12-12',
            category: Categories.food,
            payment_method: PaymentMethods.inter,
            paid: false,
            in_installments: false,
        },
        {
            description: 'Gift Card Uber',
            total_value: 100,
            date: '2023-12-12',
            category: Categories.transport,
            payment_method: PaymentMethods.inter,
            paid: false,
            in_installments: false,
			cashback: 3
        },
    ];
}
