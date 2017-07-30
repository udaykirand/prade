import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ApiCardComponent } from '../component';
import {
  MaterialModule
} from '@angular/material';

import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService,
  ProductService
} from '../service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ApiCardComponent
      ],
      imports: [
        MaterialModule.forRoot(),
      ],
      providers: [
        ApiService,
        AuthService,
        UserService,
        FooService,
        ConfigService,
        ProductService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
