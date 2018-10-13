import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-table-select',
  templateUrl: './table-select.component.html',
  styleUrls: ['./table-select.component.scss'],
})
export class TableSelectComponent implements OnInit {
  @Input() row: any;
  @Input() col: any;
  constructor() { }

  ngOnInit() {
  }

}
