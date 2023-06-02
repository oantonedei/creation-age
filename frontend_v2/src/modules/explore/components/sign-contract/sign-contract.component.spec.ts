import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignContractComponent } from './sign-contract.component';

describe('SignContractComponent', () => {
  let component: SignContractComponent;
  let fixture: ComponentFixture<SignContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignContractComponent]
    });
    fixture = TestBed.createComponent(SignContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
