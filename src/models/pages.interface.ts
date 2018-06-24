import { Discount } from './discounts.interface';

export interface IndexPageResponse {
  mainBanner: SingleBannerResponse;
  discounts: Array<Discount>;
  ourTechnologies: OurTechnologiesResponse;
  speakingOfClients?: any;
  popularIssues: PopularIssuesResponse;
}

export interface SingleBannerResponse {
  title: string;
  text: string;
  btnTitle?: string;
  btnLnk?: string;
  imgUrl?: string;
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

export interface PopularIssuesResponse {
  title: string;
  subtitle?: string;
  popularIssues: Array<Issue>;
}

export interface Issue {
  name: string;
  text: string;
}
