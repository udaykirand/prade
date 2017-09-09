import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// material
import { MaterialModule, MdIconRegistry } from '@angular/material';
// different theme
import 'style-loader!@angular/material/prebuilt-themes/pink-bluegrey.css';
// import 'style-loader!@angular/material/prebuilt-themes/deeppurple-amber.css';
// import 'style-loader!@angular/material/prebuilt-themes/indigo-pink.css';
// import 'style-loader!@angular/material/prebuilt-themes/purple-green.css';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ProductComponent } from './product';
import { SearchComponent } from './search';
import { ProductDetailsComponent } from './productdetails';
import { LoginGuard } from './guard';
import { NotFoundComponent } from './not-found';
import {
  HeaderComponent,
  SidebarComponent,
  ApiCardComponent,
  FooterComponent
} from './component';

import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService,
  ProductService
} from './service';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';


export function initUserFactory(userService: UserService) {
    return () => userService.initUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    SearchComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    SignupComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
    LoginGuard,
    FooService,
    AuthService,
    ApiService,
    UserService,
    ConfigService,
    ProductService,
    MdIconRegistry,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserService],
      'multi': true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
