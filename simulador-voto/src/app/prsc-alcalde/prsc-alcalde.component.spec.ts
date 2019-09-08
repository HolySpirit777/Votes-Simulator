import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrscAlcaldeComponent } from './prsc-alcalde.component';

describe('PrscAlcaldeComponent', () => {
  let component: PrscAlcaldeComponent;
  let fixture: ComponentFixture<PrscAlcaldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrscAlcaldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrscAlcaldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
