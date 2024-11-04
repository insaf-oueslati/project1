import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loginComponenet } from './login.component';

describe('LoginComponent', () => {
  let component: loginComponenet;
  let fixture: ComponentFixture<loginComponenet>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [loginComponenet]
    });
    fixture = TestBed.createComponent(loginComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
