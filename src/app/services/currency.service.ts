import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CurrenciesPage } from '../models/currencypage.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/vnd.api+json'
  });

  public currency: Currency;

  constructor(private http: HttpClient) { }

  getCurrencies(page: string, perpage: string,textfilter:string,filter:string): Observable<CurrenciesPage> {

    const params: HttpParams = new HttpParams()
      .append('page[number]', page)
      .append('page[size]', perpage)
      .append('filter['+filter+']', textfilter);

    return this.http.get(environment.url, { headers: this.headers, params: params })
      .pipe(map((response: any) => {
        const currenciesPage = new CurrenciesPage(response);
        return currenciesPage;
      })
      );
  }
  getCurrency(id: string): Observable<Currency> {

    return this.http.get(environment.url + '/' + id, { headers: this.headers })
      .pipe(map((response: any) => {
        const currency = new Currency(response.data);
        return currency;
      })
      );
  }
}
