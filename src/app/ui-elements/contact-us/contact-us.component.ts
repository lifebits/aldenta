import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CALL_CENTER_PHONE } from 'app/pages/pages.constants';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  readonly phone = CALL_CENTER_PHONE;

  contactForm = new FormGroup({
    contactWay: new FormControl('call'),
    phoneNumber: new FormControl(null),
    clientName: new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    console.log(value);
  }

}
