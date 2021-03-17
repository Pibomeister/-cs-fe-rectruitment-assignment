import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { RecentTransfersComponent } from './components/recent-transfers/recent-transfers.component';
import { TransferItemComponent } from './components/transfer-item/transfer-item.component';
import { RecentTransfersToolbarComponent } from './components/recent-transfers-toolbar/recent-transfers-toolbar.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    RecentTransfersComponent,
    TransferItemComponent,
    ImagePipe,
    RecentTransfersToolbarComponent,
    ConfirmationModalComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
