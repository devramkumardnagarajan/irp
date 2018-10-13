import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-table-operations',
  templateUrl: './table-operations.component.html',
  styleUrls: ['./table-operations.component.scss'],
})
export class TableOperationsComponent implements OnInit {
  @Input() data: any;
  @Input() click: Function;
  @Input() operations: any[];
  constructor() { }
  ngOnInit() {
  }
}
