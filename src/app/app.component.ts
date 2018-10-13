/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  currentUrl: string;
  constructor(private analytics: AnalyticsService, private router: Router, private location: Location) {
    this.checkAuth(location);
  }

  ngOnInit(): void {
  }
  checkAuth(location: Location) {
    const token = localStorage.getItem('token') || null;
    if (token) {
      if (location.path().indexOf('auth') > -1) {
        this.router.navigate(['admin']);
      }
    }else {
      if (location.path().indexOf('auth') === -1) {
        this.router.navigate(['auth']);
      }
    }
  }
}
