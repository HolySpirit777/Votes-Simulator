import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PldRegidorComponent } from './pld-regidor.component';

describe('PldRegidorComponent', () => {
  let component: PldRegidorComponent;
  let fixture: ComponentFixture<PldRegidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PldRegidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PldRegidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
