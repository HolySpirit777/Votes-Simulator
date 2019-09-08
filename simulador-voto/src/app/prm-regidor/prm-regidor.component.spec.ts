import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmRegidorComponent } from './prm-regidor.component';

describe('PrmRegidorComponent', () => {
  let component: PrmRegidorComponent;
  let fixture: ComponentFixture<PrmRegidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrmRegidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmRegidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
