import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiUsersComponent } from './ci-users.component';

describe('CiUsersComponent', () => {
  let component: CiUsersComponent;
  let fixture: ComponentFixture<CiUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
