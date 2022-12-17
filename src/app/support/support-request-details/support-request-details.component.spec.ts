import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestDetailsComponent } from './support-request-details.component';

describe('SupportDetailsComponent', () => {
  let component: SupportRequestDetailsComponent;
  let fixture: ComponentFixture<SupportRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
