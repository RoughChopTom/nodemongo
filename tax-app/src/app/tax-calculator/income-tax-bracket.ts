export class IncomeTaxBracket {
  min: number;
  max: number;
  rate: number;
  additional: number;
  text: string;

  constructor(min: number, max: number, rate: number, additional: number, text: string) {
    this.min = min;
    this.max = max;
    this.rate = rate;
    this.additional = additional;
    this.text = text;
  }
}
