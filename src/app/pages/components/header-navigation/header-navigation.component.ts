import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

  navElementsList = [
    {
      name: 'Услуги'
    },{
      name: 'Рассрочка'
    },{
      name: 'Цены'
    },{
      name: 'Врачи'
    },{
      name: 'Отзывы'
    },{
      name: 'О Компании'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
