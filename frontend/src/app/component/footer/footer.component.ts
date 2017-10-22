import { Component, OnInit } from '@angular/core';
import { ContactUsModalService } from './../contactus/contactus-modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
