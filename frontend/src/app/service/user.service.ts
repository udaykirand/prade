import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {

  currentUser;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  initUser() {
    const promise = this.apiService.anonGet(this.config.refresh_token_url).toPromise()
    .then(res => {
      if (res.access_token !== null) {
        return this.getMyInfo().toPromise()
        .then(user => {
          this.currentUser = user;
        });
      }
    })
    .catch(() => null);
    return promise;
  }

  getMyInfo() {
    return this.apiService.get(this.config.whoami_url).map(user => this.currentUser = user);
  }

  getAll() {
    return this.apiService.get(this.config.users_url);
  }

  register(user) {
    const body = `{"username":"${user.username}","password":"${user.password}","confirmPassword":"${user.confirmPassword}"}`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.apiService.post(this.config.register_url, body, headers);
  }

  isAdmin() {
    var i = null;
    if(!this.currentUser) {
      return false;
    }
    for (i = 0; this.currentUser.authorities.length > i; i += 1) {
      if (this.currentUser.authorities[i].authority === "ROLE_ADMIN") {
        return true;
      }
    }
    return false;
  }

}
