import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaxCalculatorComponent} from "./tax-calculator.component";

const routes: Routes = [{
  path: 'taxcalculator', component: TaxCalculatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxCalculatorRoutingModule {
}
