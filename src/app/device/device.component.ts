import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  deviceId : string
  name: string;
  specifications: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {deviceId:"1001",name:"gfhsghwiyt",specifications:"nfgiurgy9hg8fuergbfuergbejbgkb"},
  {deviceId:"1001",name:"gfhsghwiyt",specifications:"nfgiurgy9hg8fuergbfuergbejbgkb"},
  {deviceId:"1001",name:"gfhsghwiyt",specifications:"nfgiurgy9hg8fuergbfuergbejbgkb"},
  {deviceId:"1001",name:"gfhsghwiyt",specifications:"nfgiurgy9hg8fuergbfuergbejbgkb"},
  {deviceId:"1001",name:"gfhsghwiyt",specifications:"nfgiurgy9hg8fuergbfuergbejbgkb"},
  {deviceId:"1001",name:"gfhsghwiyt",specifications:"nfgiurgy9hg8fuergbfuergbejbgkb"}

];
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['deviceId', 'name', 'specifications'];
  dataSource = ELEMENT_DATA;
  
}
