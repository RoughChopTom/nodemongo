import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {HistoryService} from "./history.service";
import {TaxCalculatorService} from "../tax-calculator/tax-calculator.service";
import {IncomeTaxBracket} from "../tax-calculator/income-tax-bracket";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['select', 'created', 'income', 'superPercent', 'superAnnuation', 'gross', 'tax', 'net', 'netSuperannuation', 'taxYear'];
  dataSource: MatTableDataSource<Object> = new MatTableDataSource();
  selection = new SelectionModel<Object>(true, []);
  isLoadingData = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private historyService: HistoryService, private taxCalculatorService: TaxCalculatorService) {
  }

  ngOnInit() {
    this.refreshData();
  }

  onDeleteClicked() {
    let calculationIds = this.selection.selected.map(x => x['_id']);
    this.historyService.deleteCalculations(calculationIds).then((result) => {
      if (result === 200) {
        this.refreshData();
      }
    });
  }

  onRefreshClicked() {
    this.refreshData();
  }

  taxRates(year: number): IncomeTaxBracket[]{
    return this.taxCalculatorService.getTaxRates(year);
  }

  private refreshData() {
    this.isLoadingData = true;
    this.historyService.getCalculations().then((data: Object[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.isLoadingData = false;
    });
  }
}
