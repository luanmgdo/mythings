import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsmanDetailComponent } from './nsman-detail.component';

describe('NsmanDetailComponent', () => {
  let component: NsmanDetailComponent;
  let fixture: ComponentFixture<NsmanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsmanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsmanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
