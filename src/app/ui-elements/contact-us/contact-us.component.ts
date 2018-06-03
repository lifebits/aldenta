import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

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
