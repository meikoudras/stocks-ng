import { Stock } from "./stock";

export interface DayInterface {
  day: number;
  stocks: Stock[];
}

export class Day implements DayInterface{
  public day: number;
  public stocks: Stock[];


  constructor(day: number, baseStocks: Stock[]){
    this.day = day;
    this.stocks = baseStocks.map(stock => Day.advance(stock))
  }

  private static advance(base: Stock): Stock {
    const newStock = new Stock(base.symbol, base.name, base.price);
    const sign = Math.random() < 0.5 ? -1 : 1;
    const price = base.currentPrice || base.price
    newStock.currentPrice = Math.round((price + sign * Math.random() * price * 0.1) * 100) / 100;

    return newStock;
  }
}
