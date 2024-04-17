import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRformComponent } from './user-rform.component';

describe('UserRformComponent', () => {
  let component: UserRformComponent;
  let fixture: ComponentFixture<UserRformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRformComponent]
    });
    fixture = TestBed.createComponent(UserRformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
