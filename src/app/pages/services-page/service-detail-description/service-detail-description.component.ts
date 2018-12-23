import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail-description',
  templateUrl: './service-detail-description.component.html',
  styleUrls: ['./service-detail-description.component.scss']
})
export class ServiceDetailDescriptionComponent implements OnInit {

  part?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => this.part = params.get('servicePart'));
  }

}
