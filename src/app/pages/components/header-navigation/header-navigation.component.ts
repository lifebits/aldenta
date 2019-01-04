import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { NavigationItem, PAGE_NAVIGATION_LIST } from '../../pages.constants';
import { ServiceNavigationItem, SubServiceNode } from 'models/services.interfaces';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderNavigationComponent implements OnInit {

  @Input() serviceList?: Array<ServiceNavigationItem>;
  navigationIsActive = false;

  pageList: Array<NavigationItem> = PAGE_NAVIGATION_LIST;

  activeServiceIndex?: number;
  activeServiceName?: string;
  activeSubServiceList?: Array<SubServiceNode>;

  constructor() {}

  ngOnInit() {}

  onSelectPart(part: ServiceNavigationItem, index: number) {
    this.activeServiceIndex = index;
    this.activeServiceName = part.name;
    this.activeSubServiceList = part.components;
  }

  checkPopUpActiveStatus(value: boolean) {
    this.navigationIsActive = value;
  }

  closeNavigation() {
    this.navigationIsActive = false;
  }

}
