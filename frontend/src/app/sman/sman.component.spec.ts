import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmanComponent } from './sman.component';

describe('SmanComponent', () => {
  let component: SmanComponent;
  let fixture: ComponentFixture<SmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
