import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { RecentTransfersComponent } from './components/recent-transfers/recent-transfers.component';
import { TransferItemComponent } from './components/transfer-item/transfer-item.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    RecentTransfersComponent,
    TransferItemComponent,
    ImagePipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
