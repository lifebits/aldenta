import { Discount } from './discounts.interface';

export interface IndexPageResponse {
  mainBanner: SingleBannerResponse;
  mainDirection: MainDirectionResponse;
  discounts: Array<Discount>;
  ourTechnologies: OurTechnologiesResponse;
  speakingOfClients?: any;
}

export interface SingleBannerResponse {
  title: string;
  text: string;
  btnTitle?: string;
  btnLnk?: string;
  imgUrl?: string;
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

export interface OurTechnologiesResponse {
  title: string;
  subtitle?: string;
  technology: Array<OurTechnology>;
}

export interface OurTechnology {
  title: string;
  svg: string;
}
