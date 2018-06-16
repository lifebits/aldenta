import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent implements OnInit {

  @Input() value?: number;
  @Input() type: 'success' = 'success';
  @Input() size: 'md' = 'md';

  constructor() { }

  ngOnInit() {
  }

}
