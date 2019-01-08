import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-doctors-actions',
  templateUrl: './service-doctors-actions.component.html',
  styleUrls: ['./service-doctors-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDoctorsActionsComponent implements OnInit {

  @Input() actionList?: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
