import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from './services/currency.service';
import { CurrencyModule } from './components/currency/currency.module';
import { CurrencyListComponent } from './components/currency/currency-list/currency-list.component';
import { CurrencyDetailComponent } from './components/currency/currency-detail/currency-detail.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/currencies', pathMatch: 'full' },
  { path: 'currencies', component: CurrencyListComponent },
  { path: 'currency/:id', component: CurrencyDetailComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, { useHash: true }
    ),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    CurrencyModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})


export class AppModule { }
