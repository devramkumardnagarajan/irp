import { Component, OnInit } from '@angular/core';
import {Service} from '../../service/service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {UserColumns, UserForms} from '../../pages/user/user';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  rows: any[];
  columns: any[] = UserColumns;
  module: string = this.route.snapshot.paramMap.get('module');
  create: string = '../' + this.module + '/form/0';
  constructor(private api: Service, private router: Router, private route: ActivatedRoute) {
    switch (this.module) {
      case 'users':
        this.columns = UserColumns;
        break;
      case 'projects':
        this.columns = UserColumns;
        break;
      default:
        this.columns = this.columns;
    }
  }

  ngOnInit() {
    this.api.getAll(this.module).subscribe(response => {
      this.rows = response;
    });
  }
  click(data: any, op: any) {
    switch (op) {
      case 'edit':
        this.router.navigate(['../' + this.module + '/form/' + data]);
        break;
      case 'delete':
        this.api.delete(this.module, data).subscribe(response => {
          this.rows = this.rows.filter(r => r.Id !== data);
        });
        break;
    }
  }
}
