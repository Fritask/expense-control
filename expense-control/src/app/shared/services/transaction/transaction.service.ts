import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
	ITotalSpent,
	ITransaction,
} from '../../interfaces/transaction.interface';

@Injectable({
	providedIn: 'root',
})
export class TransactionService {
	private _mainTransactions: ITransaction[] = [];
	private _monthlyTransactions: ITransaction[] = [];
	private _totalSpent?: ITotalSpent;

	private apiUrl = 'http://localhost:3000';

	constructor(private http: HttpClient) {}

	getTransactions(): Observable<any> {
		return this.http.get<any>(this.apiUrl + '/transactions');
	}

	arrangeTransactions() {
		this.getTransactions().subscribe({
			next: (response) => {
				if (response.data.length) {
					this.mainTransactions = response.data.filter(
						(item: ITransaction) => item.monthly === false
					);

					this.monthlyTransactions = response.data.filter(
						(item: ITransaction) => item.monthly === true
					);

					this.setTotalSpent();
				}
			},
			error: (err) => {
				alert('error');
			},
		});
	}

	setTotalSpent() {
		const main = this.mainTransactions?.reduce(
			(accumulator: number, transaction: ITransaction) => {
				if (
					transaction.in_installments &&
					transaction.installment_info?.value
				)
					return accumulator + transaction.installment_info?.value;

				return accumulator + transaction.total_value;
			},
			0
		);

		const monthly = this.monthlyTransactions.reduce(
			(accumulator: number, transaction: ITransaction) => {
				return accumulator + transaction.total_value;
			},
			0
		);

		this._totalSpent = {
			total: main + monthly,
			main,
			monthly,
		};
	}

	get totalSpent(): ITotalSpent | undefined {
		return this._totalSpent;
	}

	set totalSpent(value: ITotalSpent) {
		this._totalSpent = value;
	}

	get mainTransactions(): ITransaction[] {
		return this._mainTransactions;
	}

	set mainTransactions(value: ITransaction[]) {
		this._mainTransactions = value;
	}

	get monthlyTransactions(): ITransaction[] {
		return this._monthlyTransactions;
	}

	set monthlyTransactions(value: ITransaction[]) {
		this._monthlyTransactions = value;
	}
}
