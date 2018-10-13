import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() elem: any;
  @Input() f: any;
  @Input() myform: any;
  @Input() change: Function;
  constructor() { }

  ngOnInit() {
  }

}
