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
  accountBalance$: Observable<number>;
  showConfirmationModal: boolean = false;
  newTransfer!: Transfer | null;

  constructor(private readonly transferService: TransferService) {
    this.transfers$ = this.transferService.transfers$;
    this.accountBalance$ = this.transferService.accountBalance$;
  }

  ngOnInit(): void {
    this.transferService.loadAll();
  }

  onCreateTransfer(transfer: Transfer): void {
    this.newTransfer = transfer;
    this.showConfirmationModal = true;
  }

  onConfirmTransfer(result: boolean): void {
    this.showConfirmationModal = false;
    if (result && !!this.newTransfer) {
      this.transferService.addTransfer(this.newTransfer);
    }
    this.newTransfer = null;
  }
}
