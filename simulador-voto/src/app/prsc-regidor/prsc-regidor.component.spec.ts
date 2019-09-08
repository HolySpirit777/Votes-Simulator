import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrscRegidorComponent } from './prsc-regidor.component';

describe('PrscRegidorComponent', () => {
  let component: PrscRegidorComponent;
  let fixture: ComponentFixture<PrscRegidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrscRegidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrscRegidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
