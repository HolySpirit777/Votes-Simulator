import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrscPresidenteComponent } from './prsc-presidente.component';

describe('PrscPresidenteComponent', () => {
  let component: PrscPresidenteComponent;
  let fixture: ComponentFixture<PrscPresidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrscPresidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrscPresidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
