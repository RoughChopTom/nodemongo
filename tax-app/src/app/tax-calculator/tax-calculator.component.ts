import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IncomeTaxBracket, TaxCalculatorService} from "./tax-calculator.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.less']
})
export class TaxCalculatorComponent implements OnInit {

  profileForm = this.fb.group({
    superPercent: ['9.5', Validators.required],
    incomeType: ['1', Validators.required],
    income: ['0', Validators.required],
    year: ['2014', Validators.required]
  });

  calculations: {};

  constructor(private fb: FormBuilder, private taxCalculatorService: TaxCalculatorService) {
    this.initialiseCalculations();
  }


  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(() => {
      this.setCalcuations();
    });
  }

  private initialiseCalculations() {
    this.calculations = {
      superAnnuation: 0,
      gross: 0,
      tax: 0,
      net: 0,
      netSuperannuation: 0,
    };
  }

  private setCalcuations() {
    const superPercent = parseFloat(this.profileForm.value['superPercent']);
    const incomeType = parseInt(this.profileForm.value['incomeType']);
    const income = parseFloat(this.profileForm.value['income']);
    const year = parseInt(this.profileForm.value['year']);

    this.calculations['superAnnuation'] = this.superAnnuation(superPercent, income);
    this.calculations['gross'] = this.gross(superPercent, income, incomeType);
    this.calculations['tax'] = this.tax(income, year);
    this.calculations['net'] = this.net(superPercent, income, incomeType, year);
    this.calculations['netSuperannuation'] = this.netSuperannuation(superPercent, income, incomeType, year);
  }

  private superAnnuation(superPercent: number, income: number): number {
    return (income / 100) * superPercent;
  }

  private gross(superPercent: number, income: number, incomeType: number): number {
    if (incomeType === 1) {
      return income + this.superAnnuation(superPercent, income);
    }
    return income;
  }

  private tax(income: number, year: number): number {
    const taxBrackets: IncomeTaxBracket[] = this.taxCalculatorService.getTaxRates(year);
    if (taxBrackets == null || isUndefined(taxBrackets)) {
      return 0;
    }
    let tax = 0;
    for (let i = 0; i < taxBrackets.length; i++) {
      if (taxBrackets[i].min >= income) {
        break;
      }
      tax += taxBrackets[i].additional;
      let delta = taxBrackets[i].max > income ? income - taxBrackets[i].min : taxBrackets[i].max - taxBrackets[i].min;
      tax += delta * taxBrackets[i].rate;
    }
    return tax;
  }

  private net(superPercent: number, income: number, incomeType: number, year: number): number {
    return this.gross(superPercent, income, incomeType) - this.tax(income, year);
  }

  private netSuperannuation(superPercent: number, income: number, incomeType: number, year: number) {
    return this.net(superPercent, income, incomeType, year) + this.superAnnuation(superPercent, income);
  }
}
