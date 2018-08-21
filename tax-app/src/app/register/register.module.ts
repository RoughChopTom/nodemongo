import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule {
}
