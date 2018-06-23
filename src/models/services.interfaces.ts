export interface ServiceNavigationItem {
  id: string;
  name: string;
  routeLink: Array<string>;
  svgLarge: string;
  svgSmall: string;
  discount?: ServiceDiscount;
  components: Array<LinkNode>;
}

export interface LinkNode {
  name: string;
  routerLink: Array<string>;
}

export interface ServiceDiscount {
  active: boolean;
  title: string;
  value: number;
  isPercent: boolean;
}
