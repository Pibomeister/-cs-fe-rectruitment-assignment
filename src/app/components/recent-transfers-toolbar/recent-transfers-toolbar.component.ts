import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recent-transfers-toolbar',
  templateUrl: './recent-transfers-toolbar.component.html',
  styleUrls: ['./recent-transfers-toolbar.component.scss'],
})
export class RecentTransfersToolbarComponent {
  @Output() searchUpdated = new EventEmitter<string>();
  @Output() sortUpdated = new EventEmitter<{
    sortType: 'date' | 'beneficiary' | 'amount';
    sortDirection: 'asc' | 'desc';
  }>();

  sortDirectionAsc: boolean = true;
  sortType: 'date' | 'beneficiary' | 'amount' | null = null;
  searchString: string = '';

  /**
   * Updates the sort type and toggles sort direction, emits the corresponding event
   * @param sortType the type to sort by
   */
  onSetSortType(sortType: 'date' | 'beneficiary' | 'amount'): void {
    if (sortType === this.sortType) {
      this.sortDirectionAsc = !this.sortDirectionAsc;
    }
    this.sortType = sortType;
    this.sortUpdated.next({
      sortType,
      sortDirection: this.sortDirectionAsc ? 'asc' : 'desc',
    });
  }

  /**
   * Updates the search string and emits the corresponding event
   * @param value the search string
   */
  onSetSearch(value: string): void {
    this.searchString = value;
    this.searchUpdated.next(value);
  }
}
