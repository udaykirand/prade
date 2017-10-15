import { Component, OnInit } from '@angular/core';
import {
  UserService,
  AuthService,
  ConfigService,
  ProductService
} from '../../service';
import { Router } from '@angular/router';

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
      location.href='/api/reminder/download.xls';
    } else {
      this.router.navigate(['/login']);
    }
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