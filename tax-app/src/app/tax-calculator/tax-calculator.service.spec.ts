import { TestBed, inject } from '@angular/core/testing';

import { TaxCalculatorService } from './tax-calculator.service';

describe('TaxCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxCalculatorService]
    });
  });

  it('should be created', inject([TaxCalculatorService], (service: TaxCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
