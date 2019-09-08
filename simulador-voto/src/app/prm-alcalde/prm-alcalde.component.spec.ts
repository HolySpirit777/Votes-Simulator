import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmAlcaldeComponent } from './prm-alcalde.component';

describe('PrmAlcaldeComponent', () => {
  let component: PrmAlcaldeComponent;
  let fixture: ComponentFixture<PrmAlcaldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrmAlcaldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmAlcaldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
