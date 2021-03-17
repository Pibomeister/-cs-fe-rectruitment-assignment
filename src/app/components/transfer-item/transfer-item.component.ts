import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../../models/transfer';

@Component({
  selector: 'app-transfer-item',
  templateUrl: './transfer-item.component.html',
  styleUrls: ['./transfer-item.component.scss'],
})
export class TransferItemComponent implements OnInit {
  @Input()
  transfer!: Transfer;

  @Input()
  isFirst: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
