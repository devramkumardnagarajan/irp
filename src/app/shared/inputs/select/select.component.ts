import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() elem: any;
  @Input() f: any;
  @Input() myform: any;
  constructor() { }

  ngOnInit() {
  }

}
