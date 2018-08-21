import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {isUndefined} from 'util';
import {MatSnackBar} from '@angular/material';

import {IncomeTaxBracket} from "./income-tax-bracket";
import {Calculations} from "./calculations";
import {TaxCalculatorService} from "./tax-calculator.service";

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.less']
})
export class TaxCalculatorComponent implements OnInit {
  calculations: Calculations;

  profileForm = this.fb.group({
    superPercent: [9.5, [Validators.required, Validators.min(9.5), Validators.max(100)]],
    incomeType: [1, Validators.required],
    income: [0, [Validators.required, Validators.min(0)]],
    year: [2014, Validators.required]
  });

  constructor(public snackBar: MatSnackBar, private fb: FormBuilder, private taxCalculatorService: TaxCalculatorService) {
    this.initialiseCalculations();
  }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(() => {
      this.setCalcuations();
    });
  }

  onSaveClicked() {
    this.taxCalculatorService.saveRates(this.calculations).subscribe((result) => {
      if (result !== 200) {
        this.openSnackBar('Save Unsuccessful');
        return;
      }
      this.openSnackBar('Save Successful');
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 1500});
  }

  private initialiseCalculations() {
    this.calculations = {
      superAnnuation: 0,
      gross: 0,
      tax: 0,
      net: 0,
      netSuperannuation: 0,
      year: this.selectedYear(),
      income: this.seletedIncome(),
      superPercent: this.selectedSuperPercent()
    };
  }

  private setCalcuations() {
    this.calculations.superAnnuation = this.superAnnuation(this.selectedSuperPercent(), this.seletedIncome());
    this.calculations.gross = this.gross(this.selectedSuperPercent(), this.seletedIncome(), this.selectedIncomeType());
    this.calculations.tax = this.tax(this.seletedIncome(), this.selectedYear());
    this.calculations.net = this.net(this.selectedSuperPercent(), this.seletedIncome(), this.selectedIncomeType(), this.selectedYear());
    this.calculations.netSuperannuation = this.netSuperannuation(this.selectedSuperPercent(), this.seletedIncome(), this.selectedIncomeType(), this.selectedYear());
    this.calculations.year = this.selectedYear();
    this.calculations.income = this.seletedIncome();
    this.calculations.superPercent = this.selectedSuperPercent();
  }

  private selectedSuperPercent(): number {
    return parseFloat(this.profileForm.value['superPercent']);
  }

  private selectedIncomeType(): number {
    return parseInt(this.profileForm.value['incomeType']);
  }

  private seletedIncome(): number {
    return parseFloat(this.profileForm.value['income']);
  }

  private selectedYear(): number {
    return parseInt(this.profileForm.value['year']);
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
    let mybracket = taxBrackets.find(x => x.min < income && x.max > income);
    if(isUndefined(mybracket)){
      return;
    }
    tax += mybracket.additional;
    tax += (income - mybracket.min) * mybracket.rate;
    return tax;
  }

  private net(superPercent: number, income: number, incomeType: number, year: number): number {
    return this.gross(superPercent, income, incomeType) - this.tax(income, year);
  }

  private netSuperannuation(superPercent: number, income: number, incomeType: number, year: number) {
    return this.net(superPercent, income, incomeType, year) + this.superAnnuation(superPercent, income);
  }
}
