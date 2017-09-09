import { Component, OnInit } from '@angular/core';
import {
  UserService,
  AuthService,
  ConfigService
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
    private router: Router
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

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

loadBangles() {
    this.products = [
      {
        name: "bangle1",
        description: "bangle 1",
        image:"image1"
      }
    ];
  }
}
