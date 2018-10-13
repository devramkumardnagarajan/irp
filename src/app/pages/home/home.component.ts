import { Component, OnInit } from '@angular/core';
import {MENUS} from './home';
import {ADMISSION, MENU_ITEMS, PROFILE} from '../pages-menu';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  menus: any[] = MENUS;
  menu = MENU_ITEMS;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  goTo(url: string) {
    this.router.navigate(['admin/' + url]);
  }
}
