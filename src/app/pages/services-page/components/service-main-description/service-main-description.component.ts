import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-main-description',
  templateUrl: './service-main-description.component.html',
  styleUrls: ['./service-main-description.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceMainDescriptionComponent implements OnInit {

  @Input() data?: string;

  constructor() { }

  ngOnInit() {
  }

}
