export interface ClinicService {
  canonicalName: string;
  name: string;
  routeLink: Array<string>;
  svg: string;
  discount?: {
    name: string;
    value: number;
    type: 'percent' | 'static';
  };
  components: Array<LinkNode>;
}

export interface LinkNode {
  name: string;
  routerLink: Array<string>;
}
