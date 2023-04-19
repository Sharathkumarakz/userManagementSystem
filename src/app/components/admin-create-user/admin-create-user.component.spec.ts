import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateUserComponent } from './admin-create-user.component';

describe('AdminCreateUserComponent', () => {
  let component: AdminCreateUserComponent;
  let fixture: ComponentFixture<AdminCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
