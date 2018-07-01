import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../../../models/currency.model';
import { Router } from '@angular/router';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Input() currency: Currency;

  constructor(private router: Router,private currencyService:CurrencyService) { }

  ngOnInit() {
  }
  currencyDetails(currency:Currency) {
    this.currencyService.currency=currency;
    this.router.navigate(['/currencies/detail']);

  }
}
