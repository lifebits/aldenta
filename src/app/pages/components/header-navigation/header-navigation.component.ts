import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { NavigationItem, PAGE_NAVIGATION_LIST } from '../../pages.constants';
import { ServiceNavigationItem, LinkNode } from 'models/services.interfaces';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderNavigationComponent implements OnInit {

  @Input() serviceList?: Array<ServiceNavigationItem>;

  pageList: Array<NavigationItem> = PAGE_NAVIGATION_LIST;

  selectedServiceName?: string;
  serviceListLevelTwo?: Array<LinkNode>;

  constructor() {}

  ngOnInit() {}

  onSelectPart(part: ServiceNavigationItem): void {
    this.selectedServiceName = part.name;
    this.serviceListLevelTwo = part.components;
  }

}
