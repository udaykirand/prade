import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiCardComponent} from '../component';
import {
  MaterialModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService
} from '../service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        MaterialModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers:
      [
        UserService,
        ApiService,
        ConfigService,
        AuthService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
