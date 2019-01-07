import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-cost',
  templateUrl: './service-cost.component.html',
  styleUrls: ['./service-cost.component.scss']
})
export class ServiceCostComponent implements OnInit {

  @Input() serviceName?: string;
  @Input() serviceCost?: number;

  constructor() { }

  ngOnInit() {
  }

}
