import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatIconModule} from "@angular/material";
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {HomeModule} from "./home/home.module";
import {TransformDirective} from "./transform.directive";
import {HeaderscrolledDirective} from "./header/header-scrolled.directive";
import {TaxCalculatorModule} from "./tax-calculator/tax-calculator.module";
import {FooterComponent} from "./footer/footer.component";
import {SignInModule} from "./sign-in/sign-in.module";

const imports = [
  BrowserModule,
  MatIconModule,
  HomeModule,
  SignInModule,
  TaxCalculatorModule,
  AppRoutingModule,
  PageNotFoundModule
];

const declarations = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  TransformDirective,
  HeaderscrolledDirective
];

@NgModule({
  declarations: declarations,
  imports: imports,
  bootstrap: [AppComponent]
})
export class AppModule {
}
