import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { SellerData } from '../interfaces/SellerData';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.scss']
})
export class SellerListComponent implements OnInit {
  displayedColumns: string[] = ['select', 'sellerName', 'currencies', 'offices', 'biddedDeals', 'gauranteedDeals', 'action'];
  dataSource: MatTableDataSource<SellerData>;
  data = [];
  selection = new SelectionModel<SellerData>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataServiceService, private router: Router) {
    this.data = this.dataService.getSellerData();
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  deleteRecord = (vo, deleteMultiRecord) => {
    if (deleteMultiRecord || window.confirm("Are You Sure You Want To Delete This Record.. ?")) {
      this.data = this.data.filter((item) => item.id !== vo.id);
      this.dataService.sellersData = this.data;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataService.saveDetails();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      return;
    }
  }

  addSeller = () => this.router.navigate(['/seller/new']);

  deleteMultipleRecord = () => {
    if (window.confirm("Are You Sure You Want To Delete Selected Records.. ?")) {
      this.selection.selected.forEach((obj) => {
        this.deleteRecord(obj, true);
      });
      this.selection.clear();
    } else {
      return;
    }
  }

  applyFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected = () => this.selection.selected.length === this.dataSource.data.length;

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle = () => {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
