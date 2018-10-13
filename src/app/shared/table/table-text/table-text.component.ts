import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-table-text',
  templateUrl: './table-text.component.html',
  styleUrls: ['./table-text.component.scss'],
})
export class TableTextComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
