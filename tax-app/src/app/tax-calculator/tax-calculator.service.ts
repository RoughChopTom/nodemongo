import {Injectable} from '@angular/core';

export class IncomeTaxBracket {
  min: number;
  max: number;
  rate: number;
  additional: number;

  constructor(min: number, max: number, rate: number, additional: number) {
    this.min = min;
    this.max = max
    this.rate = rate;
    this.additional = additional;
  }
}

@Injectable()
export class TaxCalculatorService {

  getTaxRates(year: number): IncomeTaxBracket[] {
    const taxRates = {};
    let bracket = [];
    bracket.push(new IncomeTaxBracket(0, 18200, 0, 0));
    bracket.push(new IncomeTaxBracket(18201, 37000, .19, 0));
    bracket.push(new IncomeTaxBracket(37001, 87000, .325, 3572));
    bracket.push(new IncomeTaxBracket(87001, 180000, .37, 19822));
    bracket.push(new IncomeTaxBracket(180000, 180000, .45, 54232));
    taxRates[2014] = bracket;

    bracket = [];
    bracket.push(new IncomeTaxBracket(0, 18200, 0, 0));
    bracket.push(new IncomeTaxBracket(18201, 37000, .19, 0));
    bracket.push(new IncomeTaxBracket(37001, 87000, .325, 3672));
    bracket.push(new IncomeTaxBracket(87001, 180000, .37, 19922));
    bracket.push(new IncomeTaxBracket(180000, 180000, .45, 54332));
    taxRates[2015] = bracket;

    return taxRates[year];
  }
}
