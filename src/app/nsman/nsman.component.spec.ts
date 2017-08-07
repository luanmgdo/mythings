import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsmanComponent } from './nsman.component';

describe('NsmanComponent', () => {
  let component: NsmanComponent;
  let fixture: ComponentFixture<NsmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
