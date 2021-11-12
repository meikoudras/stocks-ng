import { Component, OnInit } from '@angular/core';

import { Stock } from "../stock";
import {Day} from "../day";
import { StockService } from "../stock.service";

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  stocks: Stock[] = [];
  day: number = 1;
  currentDay: Date = new Date();
  dayData: Day[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getStocks()
      .subscribe(stocks => {
        this.stocks = stocks;
        this.dayData.push(new Day(this.day, this.stocks))
      })
  }

  passDay(): void {
    const base = this.todayStocks
    this.day += 1;
    this.dayData.push(new Day(this.day, base.stocks));
  }

  get today(): Date{
    let date = new Date(this.currentDay.valueOf());
    date.setDate(date.getDate() + (this.day-1));
    return date;
  }

  get todayStocks(): Day {
    return this.dayData[this.day-1]
  }
}
