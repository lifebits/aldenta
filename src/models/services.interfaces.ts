export type ServiceType = 'therapy' | 'surgery' | 'implantology' | 'orthopedics' | 'laser-dentistry' | 'periodontics' | 'orthodontics'
  | 'aesthetic-dentistry' | 'oral-hygiene';

export interface ServiceNavigationItem {
  type: ServiceType;
  name: string;
  title: string;
  routeLink: Array<string>;
  svgLarge: string;
  svgSmall: string;
  discount?: ServiceDiscount;
  components: Array<SubServiceNode>;
}

export interface SubServiceNode {
  id: string;
  name: string;
  routerLink: Array<string>;
}

export interface ServiceDiscount {
  active: boolean;
  title: string;
  value: number;
  isPercent: boolean;
}
