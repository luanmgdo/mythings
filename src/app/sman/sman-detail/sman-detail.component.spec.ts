import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmanDetailComponent } from './sman-detail.component';

describe('SmanDetailComponent', () => {
  let component: SmanDetailComponent;
  let fixture: ComponentFixture<SmanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
