import { Component, OnInit } from '@angular/core';
import { Service } from '../../service/service';
import {UserColumns} from './user';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  id: number;
  rows: any[];
  columns: any[] = UserColumns;
  module: string = 'Users';
  constructor(private api: Service, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.getAll(this.module).subscribe(response => {
     this.rows = response;
      });
  }
  click(data: any, op: any) {
    switch (op) {
      case 'edit':
            this.router.navigate(['pages/user/form/' + data]);
            break;
      case 'delete':
            this.rows = this.rows.filter(r => r.Id !== data);
            break;
    }
  }

}
