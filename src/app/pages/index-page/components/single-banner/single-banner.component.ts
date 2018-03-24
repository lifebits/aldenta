import { Component, OnInit, Input } from '@angular/core';

import { SingleBannerResponse } from 'models/pages.interface';

@Component({
  selector: 'app-single-banner',
  templateUrl: './single-banner.component.html',
  styleUrls: ['./single-banner.component.scss']
})
export class SingleBannerComponent implements OnInit {

  @Input() data?: SingleBannerResponse;

  constructor() { }

  ngOnInit() { }

}
