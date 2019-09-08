import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmPresidenteComponent } from './prm-presidente.component';

describe('PrmPresidenteComponent', () => {
  let component: PrmPresidenteComponent;
  let fixture: ComponentFixture<PrmPresidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrmPresidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmPresidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
