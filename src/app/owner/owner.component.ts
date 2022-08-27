import { Component, OnInit, ViewChild } from '@angular/core';
import {Owner} from '../../modal/owner';
import { OwnerDetailsService } from '../owner-details.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  owners: Owner[] = [];
  selection = {};
  displayedColumns: string[] = ['ownerId', 'name', 'address'];
  dataSource = new MatTableDataSource<Owner>(this.owners);
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private ownerservice:OwnerDetailsService,private _liveAnnouncer: LiveAnnouncer) { }
  
  
  ngOnInit(): void {
    console.log("owner");
    this.ownerservice.getOwnerList()
    .subscribe(val => {console.log(val);this.owners.push(val)});
    console.log(this.owners);
  }
  
  ngAfterViewInit():void{
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; 
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
}

  applyFilter(filterValue : string)
  {
       this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
