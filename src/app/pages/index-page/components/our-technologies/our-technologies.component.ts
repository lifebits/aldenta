import { Component, OnInit, Input } from '@angular/core';

import { OurTechnologiesResponse } from 'models/pages.interface';

@Component({
  selector: 'app-our-technologies',
  templateUrl: './our-technologies.component.html',
  styleUrls: ['./our-technologies.component.scss']
})
export class OurTechnologiesComponent implements OnInit {

  @Input() technologies?: OurTechnologiesResponse;

  constructor() { }

  ngOnInit() { }

}
