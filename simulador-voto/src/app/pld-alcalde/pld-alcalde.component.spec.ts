import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PldAlcaldeComponent } from './pld-alcalde.component';

describe('PldAlcaldeComponent', () => {
  let component: PldAlcaldeComponent;
  let fixture: ComponentFixture<PldAlcaldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PldAlcaldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PldAlcaldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
