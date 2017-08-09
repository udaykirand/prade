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

  userName() {
    const user = this.userService.currentUser;
    return user.firstname;
  }

  exportProducts() {
    if(this.hasSignedIn()) {
      location.href='/api/reminder/download.xls';
    } else {
      this.router.navigate(['/login']);
    }
  }

}
