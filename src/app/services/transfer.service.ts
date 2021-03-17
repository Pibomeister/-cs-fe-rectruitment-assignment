import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfer } from '../models/transfer';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  transfers$ = new BehaviorSubject<Transfer[]>([]);
  accountBalance$ = new BehaviorSubject<number>(5824.76);

  constructor(private readonly http: HttpClient) {}

  loadAll(): void {
    this.http
      .get<{ data: Transfer[] }>('/assets/data/transactions.json')
      .pipe(map((res) => res.data))
      .subscribe((data) => {
        this.transfers$.next(data);
      });
  }

  addTransfer(transfer: Transfer): void {
    const updatedTransfers = [transfer, ...this.transfers$.getValue()];
    this.transfers$.next(updatedTransfers);
    // TODO: Account for currency conversion when subtracting from an account
    this.accountBalance$.next(
      this.accountBalance$.getValue() -
        transfer.transaction.amountCurrency.amount
    );
  }
}
