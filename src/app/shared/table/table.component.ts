import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() rows: any[];
  @Input() columns: any[];
  @Input() click: Function;
  constructor() { }

  ngOnInit() {
  }

}
