import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SortEvent } from '../../models/sort-event';
import { Transfer } from '../../models/transfer';

@Component({
  selector: 'app-recent-transfers',
  templateUrl: './recent-transfers.component.html',
  styleUrls: ['./recent-transfers.component.scss'],
})
export class RecentTransfersComponent implements OnChanges {
  @Input() transfers: Transfer[] | null = [];
  displayedTransfers: Transfer[] = [];
  searchString: string = '';
  sortConfig: SortEvent | null = null;

  constructor() {}

  /**
   * Fired whenever the transfers input changes
   * @param changes the simple changes object
   */
  ngOnChanges(changes: SimpleChanges): void {
    // If the transfers input has changed
    if (!!changes.transfers) {
      this.onSortAndFilterTransfers();
    }
  }

  /**
   * Fires when the sort config in the toolbar changes
   * @param sortEvent - the updated sort config
   */
  onSortChange(sortEvent: SortEvent): void {
    this.sortConfig = sortEvent;
    this.onSortAndFilterTransfers();
  }

  /**
   * Fires when the search string in the toolbar changes
   * @param searchString - the updated search string
   */
  onSearchChange(searchString: string): void {
    this.searchString = searchString;
    this.onSortAndFilterTransfers();
  }

  /**
   * Maps the input array of transfers to filtered and sorted transfers
   */
  onSortAndFilterTransfers(): void {
    let results: Transfer[] = this.transfers ?? [];
    // if the search string is set
    if (this.searchString) {
      results = !!this.transfers
        ? this.transfers.filter(
            (t) =>
              t.merchant.name.search(new RegExp(this.searchString, 'i')) !== -1
          )
        : [];
    }
    // If the sort config has been set
    if (!!this.sortConfig) {
      if (this.sortConfig.sortType == 'amount') {
        results = results.sort((a, b) =>
          this.sortConfig?.sortDirection === 'asc'
            ? a.transaction.amountCurrency.amount -
              b.transaction.amountCurrency.amount
            : b.transaction.amountCurrency.amount -
              a.transaction.amountCurrency.amount
        );
      } else if (this.sortConfig.sortType === 'beneficiary') {
        results = results.sort((a, b) =>
          this.sortConfig?.sortDirection === 'asc'
            ? a.merchant.name > b.merchant.name
              ? -1
              : 1
            : b.merchant.name > a.merchant.name
            ? -1
            : 1
        );
      } else if (this.sortConfig.sortType === 'date') {
        results = results.sort((a, b) => {
          const aDt = new Date(a.dates.valueDate);
          const bDt = new Date(b.dates.valueDate);
          return this.sortConfig?.sortDirection === 'asc'
            ? aDt.getTime() - bDt.getTime()
            : bDt.getTime() - aDt.getTime();
        });
      }
    }
    this.displayedTransfers = results;
  }
}
