import { Merchant } from './merchant';
import { Transaction } from './transaction';

export const DEFAULT_CATEGORY_CODE = '#12a580';
export const DEFAULT_CREDIT_DEBIT_INDICATOR = 'DBIT';
export const DEFAULT_TRANFER_TYPE = 'Transaction';
export const DEFAULT_CURRENCY_CODE = 'EUR';
export interface Transfer {
  categoryCode: string;
  dates: {
    valueDate: number | string;
  };
  merchant: Merchant;
  transaction: Transaction;
}
