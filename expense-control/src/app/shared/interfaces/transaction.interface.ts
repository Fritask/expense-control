import { Categories } from "../enums/categories";
import { PaymentMethods } from "../enums/payment-methods";

export interface ITransaction {
    description: string;
    total_value: number;
    date: string;
    category: Categories;
    payment_method: PaymentMethods;
    paid: boolean;
    in_installments: boolean;
    installment_info?: IInstallment;
    cashback?: number;
}

export interface IInstallment {
    value: number;
    total_amount: number;
    amount_paid: number;
}
