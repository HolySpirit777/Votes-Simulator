import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmDiputadoComponent } from './prm-diputado.component';

describe('PrmDiputadoComponent', () => {
  let component: PrmDiputadoComponent;
  let fixture: ComponentFixture<PrmDiputadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrmDiputadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmDiputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
