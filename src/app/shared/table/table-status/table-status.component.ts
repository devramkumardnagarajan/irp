import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-table-status',
  templateUrl: './table-status.component.html',
  styleUrls: ['./table-status.component.scss'],
})
export class TableStatusComponent implements OnInit {
  @Input() data: number;
  status: boolean;
  class: string;
  constructor() { }

  ngOnInit() {
    this.status = (this.data === 1) ? true : false;
    this.class =  (this.data === 1 ) ? 'switch switch-adjust' : 'switch switch-adjust switch-margin';
  }

}
