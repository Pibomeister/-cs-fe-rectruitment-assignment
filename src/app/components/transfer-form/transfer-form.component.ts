import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

import {
  DEFAULT_CATEGORY_CODE,
  DEFAULT_CREDIT_DEBIT_INDICATOR,
  DEFAULT_CURRENCY_CODE,
  DEFAULT_TRANFER_TYPE,
  Transfer,
} from '../../models/transfer';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
})
export class TransferFormComponent implements OnChanges {
  @Input() accountBalance!: number | null;
  @Output() createTransfer = new EventEmitter<Transfer>();
  form: FormGroup;

  /**
   * Check if the form is valid and if the amount deducted will not overdraft
   * account over -500
   */
  get formIsValid() {
    if (this.accountBalance == null) {
      return false;
    }
    return (
      this.form.valid &&
      (this.accountBalance - this.form.get('amount')?.value ?? 0) > -500
    );
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly currencyPipe: CurrencyPipe
  ) {
    // TODO: Account for balances not in default currency
    this.form = this.fb.group({
      from: [
        `Free checking (6492) - ${this.currencyPipe.transform(
          this.accountBalance,
          DEFAULT_CURRENCY_CODE
        )}`,
        Validators.required,
      ],
      to: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0.001)]],
    });
  }

  /**
   * Used to patch the form with the latest account balance value
   * @param changes - the simple changes object
   */
  ngOnChanges(): void {
    this.form
      .get('from')
      ?.patchValue(
        `Free checking (6492) - ${this.currencyPipe.transform(
          this.accountBalance,
          DEFAULT_CURRENCY_CODE
        )}`
      );
  }

  /**
   * Fired when the form is submitted
   */
  onFormSubmitted(): void {
    const newTransfer: Transfer = {
      dates: {
        valueDate: Date.now(),
      },
      categoryCode: DEFAULT_CATEGORY_CODE,
      transaction: {
        creditDebitIndicator: DEFAULT_CREDIT_DEBIT_INDICATOR,
        type: DEFAULT_TRANFER_TYPE,
        amountCurrency: {
          amount: this.form.get('amount')?.value,
          currencyCode: DEFAULT_CURRENCY_CODE,
        },
      },
      merchant: {
        name: this.form.get('to')?.value,
        accountNumber: '',
      },
    };
    this.createTransfer.next(newTransfer);
    this.form.get('to')?.reset();
    this.form.get('amount')?.setValue(0);
  }
}
