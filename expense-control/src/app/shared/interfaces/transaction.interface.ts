import { Categories } from "../enums/categories";
import { PaymentMethods } from "../enums/payment-methods";
import { PaymentSources } from "../enums/payment-sources";

export interface ITransaction {
    description: string;
    total_value: number;
    date: string;
    category: Categories;
    source: PaymentSources;
    payment_method: PaymentMethods;
    monthly: boolean;
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

export interface ITotalSpent {
    total: number;
    main: number;
    monthly: number;
}