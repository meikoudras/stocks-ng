export interface StockInterface {
  symbol: string;
  name: string;
  price: number;
  currentPrice: number;

  readonly ratio: number;
}

export class Stock implements StockInterface {

  public symbol: string;
  public name: string;
  public price: number;
  public currentPrice: number;

  constructor(symbol: string, name: string, price: number){
    this.symbol = symbol;
    this.name = name;
    this.price = price;
    this.currentPrice = price;
  }

  get change(): number {
    return Math.round((this.currentPrice-this.price) * 100)/100;
  }

  get ratio(): number { // read-only property with getter function (this /is not the same thing as a “function-property”)
    return Math.round((this.change)/this.price *10000)/100;
  }
}
