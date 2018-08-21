import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaxCalculatorComponent} from "./tax-calculator.component";
import {AuthenticationGuard} from "../authentication.guard";

const routes: Routes = [{
  path: 'taxcalculator', component: TaxCalculatorComponent, canActivate: [AuthenticationGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxCalculatorRoutingModule {
}
