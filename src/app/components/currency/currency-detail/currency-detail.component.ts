import { Component, OnInit } from '@angular/core';
import { Currency } from '../../../models/currency.model';
import { CurrencyService } from '../../../services/currency.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit {
  currency: Currency;
  constructor(private currencyService: CurrencyService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.currencyService.getCurrency(id).subscribe(response => {
      this.currency=response;
    })
  }
}
