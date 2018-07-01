import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public currency: Currency = new Currency();

  constructor(private http: HttpClient) { }

  getCurrencies():Observable<Currency[]>{
    return this.http.get<Currency[]>("../assets/currencies.json");
  }
}
