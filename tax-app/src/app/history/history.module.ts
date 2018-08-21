import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule
} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

import {HistoryRoutingModule} from './history-routing.module';
import {HistoryComponent} from './history.component';
import {HistoryService} from "./history.service";
import {TaxCalculatorService} from "../tax-calculator/tax-calculator.service";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryComponent],
  providers: [HistoryService, TaxCalculatorService]
})
export class HistoryModule {
}
