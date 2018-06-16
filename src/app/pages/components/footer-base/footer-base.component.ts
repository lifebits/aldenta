import { Component, OnInit } from '@angular/core';
import { NavigationItem, MAIN_NAVIGATION_LIST } from '../../pages.constants';

@Component({
  selector: 'app-footer-base',
  templateUrl: './footer-base.component.html',
  styleUrls: ['./footer-base.component.scss']
})
export class FooterBaseComponent implements OnInit {

  navigationList: Array<NavigationItem> = MAIN_NAVIGATION_LIST;

  constructor() { }

  ngOnInit() {
  }

}
