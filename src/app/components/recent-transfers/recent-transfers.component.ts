import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../../models/transfer';

@Component({
  selector: 'app-recent-transfers',
  templateUrl: './recent-transfers.component.html',
  styleUrls: ['./recent-transfers.component.scss'],
})
export class RecentTransfersComponent implements OnInit {
  @Input() transfers: Transfer[] | null = [];

  constructor() {}

  ngOnInit(): void {}
}
