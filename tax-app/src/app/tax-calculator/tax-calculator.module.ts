import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {TaxCalculatorRoutingModule} from './tax-calculator-routing.module';
import {TaxCalculatorComponent} from './tax-calculator.component';
import {TaxCalculatorService} from "./tax-calculator.service";
import {MatButtonModule, MatInputModule, MatRadioModule, MatSelectModule, MatSnackBarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    TaxCalculatorRoutingModule
  ],
  declarations: [TaxCalculatorComponent],
  providers: [TaxCalculatorService]
})
export class TaxCalculatorModule {
}
