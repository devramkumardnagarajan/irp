import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'ngx-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent implements OnInit {
  @Input() elem: any;
  @Input() f: any;
  @Input() myform: any;
  constructor() { }

  ngOnInit() {
  }

}
