import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any = {
    name: null,
    email: null,
    message: null,
    subject: null
  };

  messageSent: boolean = false;

  constructor(public contactService: ContactService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.contactService.sendContact(this.contact).subscribe(
      (data) => {
            this.messageSent = true;
            this.contact = {
              name: null,
              email: null,
              message: null,
              subject: null
            };
      }
    );
  }

}
