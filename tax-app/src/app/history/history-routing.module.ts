import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HistoryComponent} from "./history.component";
import {AuthenticationGuard} from "../authentication.guard";

const routes: Routes = [
  {path: 'history', component: HistoryComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule {
}
