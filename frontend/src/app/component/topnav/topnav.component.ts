import { ContactUsModalService } from './../contactus/contactus-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private contactUsModalService: ContactUsModalService) { }

  ngOnInit() {
  }

  openContactUsModal(): void {
    this.contactUsModalService.showModal({
      title: 'Thank you for showing intrest!',
      message: 'Please enter your email address or phone number. We will contact you shortly.',
      confirmText: 'Hells YEAH!',
      denyText: 'Hells to the NAH!'
    }, '600px').subscribe(result => {
      // Left blank intentionally
    });
  }

}
