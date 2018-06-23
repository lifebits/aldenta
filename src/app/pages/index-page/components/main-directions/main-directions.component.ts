import { Component, OnInit, Input } from '@angular/core';

import { ServiceNavigationItem } from 'models/services.interfaces';

@Component({
  selector: 'app-main-directions',
  templateUrl: './main-directions.component.html',
  styleUrls: ['./main-directions.component.scss']
})
export class MainDirectionsComponent implements OnInit {

  @Input() mainDirections?: Array<ServiceNavigationItem>;

  constructor() { }

  ngOnInit() {}

}
