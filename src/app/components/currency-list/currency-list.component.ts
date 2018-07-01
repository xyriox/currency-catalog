import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencies: Currency[];
  currenciesByPage: Currency[];
  currentPage: number = 1;
  elementByPage: number = 6;
  numberOfPages: number;
  numbeOfPagesCollection: Array<string>;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe(response => {
      this.currencies = response;
      this.currenciesByPage = this.currencies.slice(0, this.elementByPage);
      this.numberOfPages = this.currencies.length / this.elementByPage;
      this.numbeOfPagesCollection = Array.apply(null, { length: this.numberOfPages }).map(function (value, index) {
        return index + 1;
      });
    });
  }

  changePage(page: number) {
    if (page === 1) {
      this.currenciesByPage = this.currencies.slice(0, this.elementByPage);
    }
    else if (page === this.numberOfPages) {
      this.currenciesByPage = this.currencies.slice((this.currentPage - 1) * this.elementByPage, ((this.currentPage - 1) * this.elementByPage) + this.elementByPage);
    }
    else {
      this.currenciesByPage = this.currencies.slice((this.currentPage - 1) * this.elementByPage, ((this.currentPage - 1) * this.elementByPage) +  this.elementByPage);
    }
    this.currentPage = page;
  }
}
