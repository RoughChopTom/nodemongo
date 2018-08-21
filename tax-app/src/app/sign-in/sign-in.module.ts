import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    SignInRoutingModule
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
