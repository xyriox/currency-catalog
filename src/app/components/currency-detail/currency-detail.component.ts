import { Component, OnInit } from '@angular/core';
import { Currency } from '../../models/currency.model';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit {
  currency: Currency;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currency = this.currencyService.currency;
  }

}
