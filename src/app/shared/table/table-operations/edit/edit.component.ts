import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() data: any;
  @Input() click: Function;
  @Input() operation: any;
  constructor() { }

  ngOnInit() {
  }

}
