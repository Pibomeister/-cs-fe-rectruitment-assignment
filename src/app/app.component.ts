import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from './models/transfer';
import { TransferService } from './services/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  transfers$!: Observable<Transfer[]>;

  constructor(private readonly transferService: TransferService) {}

  ngOnInit(): void {
    this.transfers$ = this.transferService.loadAll();
  }
}
