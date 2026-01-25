import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUserForm } from './reactive-user-form';

describe('ReactiveUserForm', () => {
  let component: ReactiveUserForm;
  let fixture: ComponentFixture<ReactiveUserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveUserForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveUserForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
