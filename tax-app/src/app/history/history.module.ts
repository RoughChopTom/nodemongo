import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

import {HistoryRoutingModule} from './history-routing.module';
import {HistoryComponent} from './history.component';
import {HistoryService} from "./history.service";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryComponent],
  providers: [HistoryService]
})
export class HistoryModule {
}
