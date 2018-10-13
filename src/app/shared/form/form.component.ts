import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() formObj: any[];
  @Input() myform: FormGroup;
  @Input() submitted: boolean;
  @Input() submit: Function;
  @Input() change: Function;
  @Input() submitText: string;
  constructor() { }

  ngOnInit() {
  }
  get f() { return this.myform.controls; }
}
