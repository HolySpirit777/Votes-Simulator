import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrscDiputadoComponent } from './prsc-diputado.component';

describe('PrscDiputadoComponent', () => {
  let component: PrscDiputadoComponent;
  let fixture: ComponentFixture<PrscDiputadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrscDiputadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrscDiputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
