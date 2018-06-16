import { SafeHtml } from '@angular/platform-browser';

export interface NavigationItem {
  title: string;
  link: string;
  svg?: SafeHtml;
}

export const MAIN_NAVIGATION_LIST: Array<NavigationItem> = [
  {
    title: 'Рассрочка',
    link: ''
  }, {
    title: 'Цены',
    link: ''
  }, {
    title: 'Врачи',
    link: ''
  }, {
    title: 'Отзывы',
    link: ''
  }, {
    title: 'Учебный центр',
    link: ''
  }, {
    title: 'О Компании',
    link: ''
  }
];
