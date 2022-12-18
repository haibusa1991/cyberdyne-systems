import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPasswordPromptComponent } from './verify-password-prompt.component';

describe('VerifyPasswordPromptComponent', () => {
  let component: VerifyPasswordPromptComponent;
  let fixture: ComponentFixture<VerifyPasswordPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyPasswordPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyPasswordPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
