import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestComponent } from './support-request.component';

describe('RequestSupportComponent', () => {
  let component: SupportRequestComponent;
  let fixture: ComponentFixture<SupportRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
