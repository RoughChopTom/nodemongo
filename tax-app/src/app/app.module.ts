import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {HomeModule} from "./home/home.module";
import {HeaderscrolledDirective} from "./header/header-scrolled.directive";
import {TaxCalculatorModule} from "./tax-calculator/tax-calculator.module";
import {FooterComponent} from "./footer/footer.component";
import {SignInModule} from "./sign-in/sign-in.module";
import {RegisterModule} from "./register/register.module";
import {HistoryModule} from "./history/history.module";
import {AuthenticationGuard} from "./authentication/authentication.guard";

const imports = [
  BrowserModule,
  MatIconModule,
  HomeModule,
  SignInModule,
  RegisterModule,
  TaxCalculatorModule,
  HistoryModule,
  AppRoutingModule,
  PageNotFoundModule
];

const declarations = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  HeaderscrolledDirective
];

@NgModule({
  declarations: declarations,
  imports: imports,
  bootstrap: [AppComponent],
  providers: [AuthenticationGuard]
})
export class AppModule {
}
