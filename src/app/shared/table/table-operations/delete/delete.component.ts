import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  @Input() data: any;
  @Input() click: Function;
  @Input() operation: any;
  constructor() { }

  ngOnInit() {
  }

}
