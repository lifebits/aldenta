import { Component, OnInit, Input } from '@angular/core';

import { MainDirectionResponse } from 'models/pages.interface';

@Component({
  selector: 'app-main-directions',
  templateUrl: './main-directions.component.html',
  styleUrls: ['./main-directions.component.scss']
})
export class MainDirectionsComponent implements OnInit {

  @Input() mainDirections?: MainDirectionResponse;

  constructor() { }

  ngOnInit() {}

}
