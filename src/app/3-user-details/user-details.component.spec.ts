/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty } from 'rxjs';
// Dummy Implementation of a Router
class RouterStub {
  navigate(params) {}
}

class ActivatedRouteStub {
  params: Observable<any> = empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub }, // here we are telling angular, that is should create an instance of the Router Stub instead of the Router Class
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect user to users page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });
});
