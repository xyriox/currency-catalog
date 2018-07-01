import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CurrencyComponent } from './components/currency-list/currency/currency.component';
import { CurrencyDetailComponent } from './components/currency-detail/currency-detail.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from './services/currency.service';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/currencies', pathMatch: 'full' },
  { path: 'currencies', component: CurrencyListComponent },
  { path: 'currencies/detail', component: CurrencyDetailComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    CurrencyComponent,
    CurrencyDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})


export class AppModule { }
