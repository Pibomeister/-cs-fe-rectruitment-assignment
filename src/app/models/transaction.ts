export interface Transaction {
  creditDebitIndicator: string;
  type: string;
  amountCurrency: {
    amount: number;
    currencyCode: string;
  };
}
