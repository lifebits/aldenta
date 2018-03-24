export interface IndexPageResponse {
  mainBanner?: any;
  mainDirection: MainDirectionResponse;
  discounts?: any;
  ourTechnologies?: any;
  speakingOfClients?: any;
}

export interface MainDirectionResponse {
  title?: string;
  text?: string;
  directionList: Array<MainDirectionItem>;
}

export interface MainDirectionItem {
  name: string;
  routerLink: any[];
  svg: string;
}
