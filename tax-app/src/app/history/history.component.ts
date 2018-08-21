import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {HistoryService} from "./history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})

export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['select', 'created', 'superAnnuation', 'gross', 'tax', 'net', 'netSuperannuation'];
  dataSource: MatTableDataSource<Object> = new MatTableDataSource();
  selection = new SelectionModel<Object>(true, []);
  isLoadingData = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.refreshData();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  onDeleteClicked(){
    var calculationIds = this.selection.selected.map(x => x['_id']);
    this.historyService.deleteCalculations(calculationIds).then((result)=>{
      if(result === 200){
        this.refreshData();
      }
    });
  }

  onRefreshClicked(){
    this.refreshData();
  }

  private refreshData(){
    this.isLoadingData = true;
    this.historyService.getCalculations().then((data: Object[])=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.isLoadingData = false;
    });
  }
}
