import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {AuthenticationService} from "../authentication/authentication.service";
import {IncomeTaxBracket} from "./income-tax-bracket";

@Injectable()
export class TaxCalculatorService {

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  getTaxRates(year: number): IncomeTaxBracket[] {
    let taxRates = {};
    let bracket = [];
    bracket.push(new IncomeTaxBracket(0, 18200, 0, 0, 'Nill'));
    bracket.push(new IncomeTaxBracket(18201, 37000, .19, 0, '19c for each $1 over $18,200'));
    bracket.push(new IncomeTaxBracket(37001, 87000, .25, 3572, '$3,572 plus 25c for each $1 over $37,000'));
    bracket.push(new IncomeTaxBracket(87001, 180000, .37, 19822, '$19,822 plus 37c for each $1 over $87,000'));
    bracket.push(new IncomeTaxBracket(180000, Infinity, .40, 54232, '$54,232 plus 40c for each $1 over $180,000'));
    taxRates[2014] = bracket;

    bracket = [];
    bracket.push(new IncomeTaxBracket(0, 18200, 0, 0, 'Nill'));
    bracket.push(new IncomeTaxBracket(18201, 37000, .19, 0, '19c for each $1 over $18,200'));
    bracket.push(new IncomeTaxBracket(37001, 87000, .325, 3572, '$3,572 plus 32.5c for each $1 over $37,000'));
    bracket.push(new IncomeTaxBracket(87001, 180000, .37, 19822, '$19,822 plus 37c for each $1 over $87,000'));
    bracket.push(new IncomeTaxBracket(180000, Infinity, .45, 54232, '$54,232 plus 45c for each $1 over $180,000'));
    taxRates[2015] = bracket;

    bracket = [];
    bracket.push(new IncomeTaxBracket(0, 18200, 0, 0, 'Nill'));
    bracket.push(new IncomeTaxBracket(18201, 37000, .19, 0, '19c for each $1 over $18,200'));
    bracket.push(new IncomeTaxBracket(37001, 87000, .325, 3572, '$3,572 plus 32.5c for each $1 over $37,000'));
    bracket.push(new IncomeTaxBracket(87001, 180000, .37, 19822, '$19,822 plus 37c for each $1 over $87,000'));
    bracket.push(new IncomeTaxBracket(180000, Infinity, .45, 54232, '$54,232 plus 45c for each $1 over $180,000'));
    taxRates[2016] = bracket;

    bracket = [];
    bracket.push(new IncomeTaxBracket(0, 18200, 0, 0, 'Nill'));
    bracket.push(new IncomeTaxBracket(18201, 37000, .19, 0, '19c for each $1 over $18,200'));
    bracket.push(new IncomeTaxBracket(37001, 87000, .325, 3572, '$3,572 plus 32.5c for each $1 over $37,000'));
    bracket.push(new IncomeTaxBracket(87001, 180000, .40, 19822, '$19,822 plus 40c for each $1 over $87,000'));
    bracket.push(new IncomeTaxBracket(180000, Infinity, .50, 54232, '$55,232 plus 50c for each $1 over $180,000'));
    taxRates[2017] = bracket;

    bracket = [];
    bracket.push(new IncomeTaxBracket(0, 18200, 0, 0, 'Nill'));
    bracket.push(new IncomeTaxBracket(18201, 37000, .19, 0, '19c for each $1 over $18,200'));
    bracket.push(new IncomeTaxBracket(37001, 87000, .325, 3572, '$3,572 plus 32.5c for each $1 over $37,000'));
    bracket.push(new IncomeTaxBracket(87001, 180000, .40, 19822, '$19,822 plus 40c for each $1 over $87,000'));
    bracket.push(new IncomeTaxBracket(180000, Infinity, .50, 54232, '$55,232 plus 50c for each $1 over $180,000'));
    taxRates[2018] = bracket;

    return taxRates[year];
  }

  saveRates(calculations: any): Observable<Object> {
    return this.http.post(`/api/addCalculations/${this.userId()}`, calculations);
  }

  private userId() {
    return this.auth.getUserDetails()["_id"];
  }
}
