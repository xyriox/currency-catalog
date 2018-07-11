import { Component, OnInit } from '@angular/core';
import { Currency } from '../../../models/currency.model';
import { CurrencyService } from '../../../services/currency.service';
import { CurrenciesPage } from '../../../models/currencypage.model';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currenciesPage: CurrenciesPage;
  elementPerPage: string = "10";
  currentPage: string = "0";
  pages: Array<number>;
  filter: string = "search";
  textfilter: string = "";
  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.fetchCurrencies(this.currentPage, this.elementPerPage, this.textfilter, this.filter);
  }

  fetchCurrencies(currentPage: string, elementPerPage: string, textfilter: string, filter: string) {
    this.currencyService.getCurrencies(currentPage, elementPerPage, textfilter, filter).subscribe(response => {
      this.currenciesPage = response;
    });
  }


  changePage(event: any) {
    this.currentPage = event.page;
    this.fetchCurrencies(this.currentPage, this.elementPerPage, this.textfilter, this.filter);
  }
  changeElementPerPage(elementPerPage: string) {
    this.currentPage = "0";
    this.elementPerPage = elementPerPage;
    this.fetchCurrencies(this.currentPage, this.elementPerPage, this.textfilter, this.filter);
  }
  changeTextfilter(textfilter: string) {
    this.textfilter = textfilter;
    this.fetchCurrencies(this.currentPage, this.elementPerPage, this.textfilter, this.filter);
  }
}
