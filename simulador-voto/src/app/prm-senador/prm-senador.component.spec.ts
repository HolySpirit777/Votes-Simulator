import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmSenadorComponent } from './prm-senador.component';

describe('PrmSenadorComponent', () => {
  let component: PrmSenadorComponent;
  let fixture: ComponentFixture<PrmSenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrmSenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmSenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
