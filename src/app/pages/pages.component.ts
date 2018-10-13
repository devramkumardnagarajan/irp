import {Component, OnInit} from '@angular/core';
import {ADMISSION, MENU, MENU_ITEMS, PROFILE} from './pages-menu';
import {NbMenuItem} from '@nebular/theme';
import {Location} from '@angular/common';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="getMenu()"></nb-menu>
      <router-outlet ></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu: NbMenuItem[];

  constructor(private location: Location) {
  }

  ngOnInit() {
    console.info('cc', this.menu);
  }
  getMenu() {
    const path = this.location.path();
    if (path.indexOf('profile') > -1) {
      this.menu = PROFILE;
    }else if (path.indexOf('admission') > -1) {
      this.menu = ADMISSION;
    }else {
      this.menu = MENU;
    }
    return this.menu;
  }
  setMenu(menus: NbMenuItem[]) {
    this.menu = menus;
  }

}
