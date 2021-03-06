import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FooService,
  ConfigService,
  UserService
} from '../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fooResponse = {};
  whoamIResponse = {};
  allUserResponse = {};
  message:string;
  constructor(
    private config: ConfigService,
    private fooService: FooService,
    private router: Router,
    private userService: UserService
  ) { 
    this.message = config.getData();
  }

  ngOnInit() {
    if(!this.userService.isAdmin()) {
      this.router.navigate(['/login']); 
    }
  }

  makeRequest(path) {
    if (path === this.config.foo_url) {
      this.fooService.getFoo()
      .subscribe(res => {
        this.forgeResonseObj(this.fooResponse, res, path);
      }, err => {
        this.forgeResonseObj(this.fooResponse, err, path);
      });
    } else if (path === this.config.whoami_url) {
      this.userService.getMyInfo()
      .subscribe(res => {
        this.forgeResonseObj(this.whoamIResponse, res, path);
      }, err => {
        this.forgeResonseObj(this.whoamIResponse, err, path);
      });
    } else {
      this.userService.getAll()
      .subscribe(res => {
        this.forgeResonseObj(this.allUserResponse, res, path);
      }, err => {
        this.forgeResonseObj(this.allUserResponse, err, path);
      });
    }
  }

  forgeResonseObj(obj, res, path) {
    obj['path'] = path;
    obj['method'] = 'GET';
    if (res.ok === false) {
      // err
      obj['status'] = res.status;
      try {
        obj['body'] = JSON.stringify(JSON.parse(res._body), null, 2);
      } catch (err) {
        obj['body'] = res._body;
      }
    } else {
      // 200
      obj['status'] = 200;
      obj['body'] = JSON.stringify(res, null, 2);
    }
  }

  createProduct() {
    this.router.navigate(['admin/product']);
  }

  searchProduct() {
    this.router.navigate(['admin/search']);
  }

  exportProduct() {
    if(this.userService.isAdmin()) {
      location.href='/api/reminder/download.xls';
    } else {
      this.router.navigate(['/login']);
    }
  }

  updateProduct() {
    this.router.navigate(['admin/search/']);
  }

}
