import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOrderComponent } from './part-order.component';

describe('OrderPartsComponent', () => {
  let component: PartOrderComponent;
  let fixture: ComponentFixture<PartOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
