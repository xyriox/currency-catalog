import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyComponent } from './currency-list/currency/currency.component';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PaginationModule.forRoot()

  ],
  exports: [
    CurrencyListComponent,
    CurrencyComponent,
    CurrencyDetailComponent,
  ],
  declarations: [    CurrencyListComponent,
    CurrencyComponent,
    CurrencyDetailComponent]
})
export class CurrencyModule { }
