import { Component, OnInit } from '@angular/core';
import {
  UserService,
  AuthService,
  ConfigService,
  ProductService
} from '../../service';
import { Router } from '@angular/router';
import { ContactUsModalService } from './contactus-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  products: any;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private config: ConfigService,
    private router: Router,
    private contactUsModalService: ContactUsModalService,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.userService.currentUser = null;
      this.config.resetData();
      this.router.navigate(['/login']);
    });
  }

  hasSignedIn() {
    return !!this.userService.currentUser;
  }

  isAdmin() {
    return this.userService.isAdmin();
  }

  userName() {
    const user = this.userService.currentUser;
    return user.firstname;
  }

  exportProducts() {
    if(this.userService.isAdmin()) {
      console.log("isAdmin");
      location.href='/api/reminder/download.xls';
    } else {
      this.router.navigate(['/login']);
    }
  }

  openContactUsModal(): void {
    console.log("openContactUs");
    this.contactUsModalService.showModal({
      title: 'Thank you for showing intrest!',
      message: 'Please enter your email address or phone number. We will contact you shortly.',
      confirmText: 'Hells YEAH!',
      denyText: 'Hells to the NAH!'
    }, '600px').subscribe(result => {
      console.log('ConfrimDialogService closed with response: ' + result);
    });
  }

  getBangles() {
    this.productService.setProduct({
      productId: 5,
      name: "test name",
      image: "test_image",
      description: "test_description"
    })
  }
}