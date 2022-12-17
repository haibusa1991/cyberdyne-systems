import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOrderDetailsComponent } from './part-order-details.component';

describe('OrderDetailComponent', () => {
  let component: PartOrderDetailsComponent;
  let fixture: ComponentFixture<PartOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartOrderDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
