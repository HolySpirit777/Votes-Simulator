import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PldDiputadoComponent } from './pld-diputado.component';

describe('PldDiputadoComponent', () => {
  let component: PldDiputadoComponent;
  let fixture: ComponentFixture<PldDiputadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PldDiputadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PldDiputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
