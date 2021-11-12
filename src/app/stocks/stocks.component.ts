import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { startWith } from "rxjs/operators"

import { Stock } from "../stock";
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

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getStocks()
      .subscribe(stocks => this.stocks = stocks)
  }

  passDay(): void {
    this.day += 1;
  }

  get today(){
    let date = new Date(this.currentDay.valueOf());
    date.setDate(date.getDate() + (this.day-1));
    return date;
  }
}
