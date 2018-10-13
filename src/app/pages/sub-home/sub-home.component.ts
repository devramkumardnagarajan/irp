import {Component, Input, OnInit, Output, EventEmitter, ViewContainerRef} from '@angular/core';
import {ADMISSION, MENU_ITEMS, PROFILE} from '../pages-menu';
import {ActivatedRoute} from '@angular/router';
import {PagesComponent} from '../pages.component';

@Component({
  selector: 'ngx-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.scss'],
})
export class SubHomeComponent implements OnInit {

  component: string = this.route.snapshot.paramMap.get('component');
  constructor(private route: ActivatedRoute, private viewContainerRef: ViewContainerRef) {
    console.info('component', this.component);
  }

  getParentComponent(): PagesComponent {
    return this.viewContainerRef[ '_data' ]
      .componentView.component.viewContainerRef[ '_view' ].component;
  }


ngOnInit() {
  console.info('parent', this.getParentComponent());
  /*switch (this.component) {
    case 'profile':
      this.getParentComponent().setMenu(PROFILE);
      break;
    case 'admission':
      this.getParentComponent().setMenu(ADMISSION);
      break;
    default:
  }*/
  }

}
