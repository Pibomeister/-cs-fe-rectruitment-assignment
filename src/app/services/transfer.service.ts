import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfer } from '../models/transfer';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Transfer[]> {
    return this.http
      .get<{ data: Transfer[] }>('/assets/data/transactions.json')
      .pipe(map((res) => res.data));
  }
}
