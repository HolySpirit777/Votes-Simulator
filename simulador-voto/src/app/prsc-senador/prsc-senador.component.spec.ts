import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrscSenadorComponent } from './prsc-senador.component';

describe('PrscSenadorComponent', () => {
  let component: PrscSenadorComponent;
  let fixture: ComponentFixture<PrscSenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrscSenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrscSenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
