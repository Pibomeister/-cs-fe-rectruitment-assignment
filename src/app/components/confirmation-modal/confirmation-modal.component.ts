import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_CURRENCY_CODE, Transfer } from '../../models/transfer';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent {
  @Input() accountBalance: number | null = 0;
  @Input() transfer!: Transfer;
  @Output() confirm = new EventEmitter<boolean>();

  /**
   * Gets predicted account balance after transfer is succesful
   */
  get predictedBalance() {
    return !!this.accountBalance
      ? this.accountBalance - this.transfer.transaction.amountCurrency.amount
      : 0;
  }

  defaultCurrency = DEFAULT_CURRENCY_CODE;
}
