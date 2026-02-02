import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaFormEx } from './signa-form-ex';

describe('SignaFormEx', () => {
  let component: SignaFormEx;
  let fixture: ComponentFixture<SignaFormEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaFormEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaFormEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
