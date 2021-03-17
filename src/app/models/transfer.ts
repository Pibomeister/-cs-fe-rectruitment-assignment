import { Merchant } from './merchant';
import { Transaction } from './transaction';

export interface Transfer {
  categoryCode: string;
  dates: {
    valueDate: number | string;
  };
  merchant: Merchant;
  transaction: Transaction;
}
