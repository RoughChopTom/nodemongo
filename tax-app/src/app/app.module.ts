import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from "@angular/material";
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {HomeModule} from "./home/home.module";
import {TransformDirective} from "./transform.directive";
import {HeaderscrolledDirective} from "./header/header-scrolled.directive";

const imports = [
  BrowserModule,
  MatIconModule,
  HomeModule,
  AppRoutingModule,
  PageNotFoundModule
];

const declarations = [
  AppComponent,
  HeaderComponent,
  TransformDirective,
  HeaderscrolledDirective
];

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
