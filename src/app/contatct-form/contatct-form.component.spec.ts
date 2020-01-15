import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatctFormComponent } from './contatct-form.component';

describe('ContatctFormComponent', () => {
  let component: ContatctFormComponent;
  let fixture: ComponentFixture<ContatctFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatctFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
