import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaxCalculatorRoutingModule } from './tax-calculator-routing.module';
import { TaxCalculatorComponent } from './tax-calculator.component';
import {TaxCalculatorService} from "./tax-calculator.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaxCalculatorRoutingModule
  ],
  declarations: [TaxCalculatorComponent],
  providers: [TaxCalculatorService]
})
export class TaxCalculatorModule { }
