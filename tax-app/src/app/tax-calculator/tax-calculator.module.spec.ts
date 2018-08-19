import { TaxCalculatorModule } from './tax-calculator.module';

describe('TaxCalculatorModule', () => {
  let taxCalculatorModule: TaxCalculatorModule;

  beforeEach(() => {
    taxCalculatorModule = new TaxCalculatorModule();
  });

  it('should create an instance', () => {
    expect(taxCalculatorModule).toBeTruthy();
  });
});
